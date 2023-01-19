import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faTwitter, faGithub  } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faTwitter, faGithub)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
