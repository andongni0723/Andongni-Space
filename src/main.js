import { createApp } from 'vue'
import App from "./views/App.vue"
import './assets/styles/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faVuejs, faFacebook, faBilibili } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faEnvelope, faList, faXmark } from '@fortawesome/free-solid-svg-icons'

import router from "@/router";
import store from "@/store";

/* add icons to the library */
library.add(faUserSecret, faGithub, faVuejs, faFacebook, faBilibili, faEnvelope, faList, faXmark)

createApp(App)
    .use(router)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
