import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import socketIO from 'socket.io-client'

const socket = socketIO.connect('http://localhost:2020')
socket.on('sayHiFromServer', () => {
	socket.emit('userConnected', { name: "karl" })
})

socket.on('newUser', ({ msg }) => {
	console.log(msg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
