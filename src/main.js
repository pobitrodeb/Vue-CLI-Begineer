import { createApp } from 'vue'
import App from './App.vue';
import ContactDetail from './ContactDetail.vue';

const app = createApp(App);

app.component("contact-details", ContactDetail);


app.mount('#app');