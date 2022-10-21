import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { faPersonWalking, faUserGroup, faAngleDown, faHeading, faCalendar, faClock, faLocationPin, faCamera, faUserSlash, faUserPen } from '@fortawesome/free-solid-svg-icons'

//library.add(faPersonWalking, faUserGroup, faAngleDown, faHeading, faCalendar, faClock, faLocationPin, faCamera, faUserSlash, faUserPen)

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
