import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import en from './locale/en.ts'

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    en,
    ptBR: {},
  },
});

const app = createApp(App);
app.use(i18n);
app.use(ElementPlus);
app.mount('#app');
