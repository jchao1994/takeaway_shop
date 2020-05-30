import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  // Row,
  // Col,
  Button,
  Carousel,
  CarouselItem,
  Form,
  FormItem,
  Input
} from 'element-ui'

// Vue.use(Row);
// Vue.use(Col);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
