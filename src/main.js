import {createApp} from 'vue'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const app = createApp(App).use(router).use(ElementPlus)
app.component('QuillEditor', QuillEditor)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
