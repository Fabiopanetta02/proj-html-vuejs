import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAward, faBriefcase, faChartBar, faClock, faEdit, faGlobeAmericas, faGraduationCap, faInbox, faLocationDot, faLock, faNetworkWired, faPlane } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'



library.add(faTwitter, faFacebook, faLinkedin, faClock, faPhone, faEnvelope, faLocationDot, faAward, faLock, faEdit, faGraduationCap, faNetworkWired, faBriefcase, faChartBar, faPlane, faGlobeAmericas, faInbox)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

