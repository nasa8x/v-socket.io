import "./layout.css"

import Vue from 'vue'
import App from './app.vue'
import store from './store'

import SocketIO from '../dist/socket.min.js';

// Vue.use(new SocketIO("http://localhost:8081"), { store });
Vue.use(new SocketIO("http://localhost:8081"));

new Vue({
  el: '#app',
  render: h => h(App)
});