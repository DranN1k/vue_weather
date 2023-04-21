import { createApp } from 'vue'
import App from './App.vue'
import components from './components/global/index.js'

import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);

app.use(components);

app.mount('#app')
