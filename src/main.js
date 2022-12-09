import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vueScrollTo from 'vue-scrollto'

createApp(App).use(vueScrollTo).use(store).mount('#app')
