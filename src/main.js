import { createApp } from 'vue'
import App from './App.vue';
import ContactDetail from './ContactDetail.vue';
import TheCard from './TheCard.vue';

const app = createApp(App);

app.component("contact-details", ContactDetail);
app.component("the-cards", TheCard);


app.mount('#app');