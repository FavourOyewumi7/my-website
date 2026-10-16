// Vercel serverless function: returns what Favour is playing on Spotify.
// Env vars (Vercel project settings): SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET,
// SPOTIFY_REFRESH_TOKEN (authorised with scopes user-read-currently-playing
// and user-read-recently-played). Secrets never reach the browser.

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API = "https://api.spotify.com/v1/me/player";

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;
  const basic = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });
  if (!res.ok) throw new Error(`token ${res.status}`);
  return (await res.json()).access_token;
}

function shape(track, isPlaying) {
  return {
    isPlaying,
    title: track.name,
    artist: track.artists.map((a) => a.name).join(", "),
    url: track.external_urls.spotify,
  };
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=60");
  try {
    const token = await getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    const now = await fetch(`${API}/currently-playing`, { headers });
    if (now.status === 200) {
      const data = await now.json();
      if (data.item && data.currently_playing_type === "track") {
        return res.status(200).json(shape(data.item, data.is_playing));
      }
    }

    const recent = await fetch(`${API}/recently-played?limit=1`, { headers });
    if (recent.ok) {
      const data = await recent.json();
      if (data.items && data.items[0]) {
        return res.status(200).json(shape(data.items[0].track, false));
      }
    }
    return res.status(200).json({ isPlaying: false });
  } catch (e) {
    return res.status(200).json({ isPlaying: false, error: true });
  }
};
