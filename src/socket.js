import socketIO from 'socket.io-client'
import Vue from 'vue'

const socket = socketIO.connect(process.env.VUE_APP_SERVER_URL)
socket.on('connectedUser', async ({ user }) => {
	Vue.user = user
	socket.emit('userConnected', { name: "karl" })
})

export default socket
