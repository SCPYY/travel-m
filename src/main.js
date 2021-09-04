import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入全局样式
import './style/index.less'

//全局导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

import 'amfe-flexible'

createApp(App).use(store).use(router).use(Vant).mount('#app')
