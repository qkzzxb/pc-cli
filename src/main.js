// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './core/router'
import store from './core/vuex'
//ElementUI
import ElementUI from 'element-ui'
import '../theme/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false;
//组件
import yLogo from '@/components/Logo'
Vue.component('y-logo', yLogo);
import yTitle from '@/components/Title'
Vue.component('y-title', yTitle);
import yMiniTitle from '@/components/MiniTitle'
Vue.component('y-mini-title', yMiniTitle);
import yFooter from '@/components/Footer'
Vue.component('y-footer', yFooter);
import yNav from '@/components/Nav'
Vue.component('y-nav', yNav);
import yHeader from '@/components/Header'
Vue.component('y-header', yHeader);
import yTable from '@/components/Table'
Vue.component('y-table', yTable);
import yActItem from '@/components/ActItem'
Vue.component('y-act-item', yActItem);
import yToTop from '@/components/ToTop'
Vue.component('y-to-top', yToTop);
//lodash
import Lodash from 'lodash'
window.lodash = Lodash;
//basil(缓存)
import basil from '@/core/basil.js'
window.basil = basil;
//axios
import axios from 'axios'
Vue.prototype.$http = axios;
//animate.css
import 'animate.css'
// axios.defaults.baseURL = '/pie';
// axios.defaults.headers.action = 'U003';
// axios.defaults.headers.code = '0';
// axios.defaults.headers.devicetype = 'java';
// axios.defaults.headers.msgtype = 0;
// axios.defaults.headers.sendingtime = '2016-09-26 14:46:06.090';
// axios.defaults.headers.version = '1.0.01';
new Vue({
    el: '#app',
    router, //路由
    store, //状态管理
    template: '<App/>',
    components: { App }
});