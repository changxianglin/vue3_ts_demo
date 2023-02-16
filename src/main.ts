import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/mock/index'

import { Tab, Tabs, Swipe, SwipeItem } from 'vant'

const app = createApp(App)

app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)

app.use(router).mount('#app')
