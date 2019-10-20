<template>
	<div class="container">
		<h1 id="title">
			World Chat
		</h1>
		<div id="outer-box">
			<div id="chat-container">
				<MessageContainer :messages="allMessages"/>
				<div v-for="message in typingMessages" id="typing-container">
					<p class="typing-span" v-show="typing">{{message}}</p>
				</div>
			</div>
			<form id="input-container" @submit.prevent="handlePost">
				<div id="message-container">
					<input
						:value="getContent"
						@input="attemptInputChange"
						name="content"
						placeholder="Write something here"
						id="message-input"
						autocomplete="off"
						@keyup="handleKeyUp"
					/>
				</div>
				<div id="submission-container">
					<button type="submit" id="submit-btn" value="Submit">SUBMIT</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import socket from '../socket'
import MessageContainer from './layout/MessageContainer'
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
export default {
  name: 'WorldChat',
  components: {
	MessageContainer
  },
  props: ['handlePost', 'channelId', 'eventToEmit'],
  methods: {
	handleKeyUp(e) {
		socket.emit('typing', { channelId: this.channelId, username: this.getLoggedInUser.username })
	},
	...mapActions(['attemptInputChange']),
  },
  computed: {
	...mapGetters(['allMessages', 'getContent', 'getLoggedInUser']),
  },
  async created() {
	await this.eventToEmit({
		channelId: this.channelId
	})
	const chatContainer = document.getElementById('chat-container')
	chatContainer.scrollTo({
		top: chatContainer.scrollHeight,
		left: 0,
		behavior: 'smooth'
	})
  },
  mounted() {
	const chatContainer = document.getElementById('chat-container')
	const msgListener = `newMsg-${this.channelId}`
    socket.on(msgListener, async () => {
		await this.eventToEmit({
			channelId: this.channelId
		})
		chatContainer.scrollTo({
			top: chatContainer.scrollHeight,
			left: 0,
		})
    })
    socket.on(`typing-${this.channelId}`, async ({ username }) => {
		this.typing = true
		const message = `${username} is typing...`
		if(!this.typingMessages.includes(message)) this.typingMessages = this.typingMessages.concat(message)
		chatContainer.scrollTo({
			top: chatContainer.scrollHeight,
			left: 0,
		})
		if (this.typingTimeout) clearTimeout(this.typingTimeout)
		this.typingTimeout = setTimeout(() => {
			this.typing = false
			this.typingMessages.splice(this.typingmessages.findIndex(msg => msg == message), 1)
		}, 1000)
    })
  },
  data() {
	return {
		typing: false,
		typingTimeout: null,
		typingMessages: []
	}
  }
}
</script>

<style lang="css" scoped>
	#outer-box {
		display: flex;
		border: 0.1em solid coral;
		max-height: 500px;
		flex-direction: column;
	}
	#chat-container {
		border: 0.3em solid coral;
		flex: 7;
		overflow-y: scroll;
	}
	#input-container {
		display: flex;
		border: 0.5em solid coral;
		flex: 1;
		flex-direction: row;
	}
	#message-container {
		flex: 6;
		border: 0.3em solid white;
	}
	#submission-container {
		flex: 1;
		border: 0.3em solid white;
	}
	#message-input {
		/* line-height: 1em; */
		margin: 0 0.1em;
		padding: 0;
		border: 0;
		width: 100%;
		height: 100%;
		outline: none;
	}
	#submit-btn {
		width: 100%;
		height: 100%;
		background-color: coral;
		color: white;
		outline: none;
	}
	#submit-btn:hover {
		background-color: #F0A160;
	}
	#title {
		margin: 0.5em 0;
		display: flex;
		justify-content: center;
	}
	.typing-span {
		float: right;
		margin: 0.7em 0.5em;
		line-height: 0.1em;
	}
	#typing-container {
		display: flex;
		flex-direction: column;
	}
</style>