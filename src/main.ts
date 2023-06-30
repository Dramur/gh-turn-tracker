import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'

//theme
import 'primevue/resources/themes/mdc-dark-indigo/theme.css'

//core
import 'primevue/resources/primevue.min.css'
import '@/assets/styles/style.css'

// flex
import 'primeflex/primeflex.min.css'

// icons
import 'primeicons/primeicons.css'

createApp(App)
  .use(PrimeVue)
  .use(createPinia())

  .component('Button', Button)

  .mount('#app')
