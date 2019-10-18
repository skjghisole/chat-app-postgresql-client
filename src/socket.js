import socketIO from 'socket.io-client'
import Vue from 'vue'

const socket = socketIO.connect('localhost:2020')
socket.on('connectedUser', async ({ user }) => {
	Vue.user = user
	socket.emit('userConnected', { name: "karl" })
})

export default socket
