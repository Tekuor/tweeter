import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import './buefy.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false
library.add(fas);
library.add(far);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy,{
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'far',
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
