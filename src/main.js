import { createApp } from 'vue'
import App from './App.vue'

<<<<<<< HEAD
import router from './router'
=======
// import router from './router'
>>>>>>> 97be8fc (Updates)
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faGithub)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
