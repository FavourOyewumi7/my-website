import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { injectSpeedInsights } from '@vercel/speed-insights'

// Web Analytics is wired via <Analytics /> in App.vue.
// Speed Insights reports only when deployed on Vercel.
injectSpeedInsights()

createApp(App).mount('#app')
