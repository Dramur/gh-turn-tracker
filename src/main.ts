import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'

//theme
import "primevue/resources/themes/mdc-dark-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

const app = createApp(App)
app.use(PrimeVue)

app.mount('#app')