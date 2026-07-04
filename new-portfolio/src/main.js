import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

// Vercel Web Analytics + Speed Insights (only report when deployed on Vercel)
inject()
injectSpeedInsights()

createApp(App).mount('#app')
