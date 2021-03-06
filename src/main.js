import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FlashMessage from '@smartweb/vue-flash-message';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAddressBook, faUser, faAddressCard, faAt, faPhone, faCity, faMapMarkedAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
Vue.component('fa-icon', FontAwesomeIcon)
library.add(faAddressBook, faUser, faAddressCard, faAt, faPhone, faCity, faMapMarkedAlt, faEdit, faTrash)

Vue.use(FlashMessage);
Vue.config.productionTip = false

Vue.component('Flash-message',FlashMessage);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
