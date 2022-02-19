import { createApp } from 'vue'
import { globalRegister } from './global'
// import registerDirectives from '@/directives'
import { setupStore } from './store'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/css/index.css'

const app = createApp(App)
setupStore()
app
  .use(store)
  .use(router)
  .use(globalRegister)
  // .use(registerDirectives)
  .mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
