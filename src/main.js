import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAward, faBriefcase, faChartBar, faCheck, faChevronRight, faCircleNotch, faClock, faEdit, faGaugeHigh, faGem, faGlobeAmericas, faGraduationCap, faInbox, faLocationDot, faLock, faNetworkWired, faPlane, faRocket, faUserGroup, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'



library.add(faTwitter, faFacebook, faLinkedin, faClock, faPhone, faEnvelope, faLocationDot, faAward, faLock, faEdit, faGraduationCap, faNetworkWired, faBriefcase, faChartBar, faPlane, faGlobeAmericas, faInbox, faUserGroup, faGaugeHigh, faCircleNotch, faChevronRight, faRocket, faBriefcase, faCheck, faXmark, faGem)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

