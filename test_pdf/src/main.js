import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // หรือโค้ดตั้งค่า vuetify ของคุณ

const app = createApp(App)

app.use(vuetify)
app.mount('#app')