<template>
	<div class="container">
		<h1 id="title">
			World Chat
		</h1>
		<div id="outer-box">
			<div id="chat-container">
				<MessageContainer :messages="allMessages" />
			</div>
			<form id="input-container" @submit.prevent="attemptPostMessage">
				<div id="message-container">
					<input v-model="content" placeholder="Write something here" id="message-input" autocomplete="off" />
				</div>
				<div id="submission-container">
					<button type="submit" id="submit-btn" value="Submit">SUBMIT</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import MessageContainer from './layout/MessageContainer'
import socket from '../socket'
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
export default {

  name: 'WorldChat',
  components: {
	MessageContainer
  },
  methods: {
	...mapActions(['fetchAllMessages', 'attemptInputChange', 'attemptPostMessage'])
  },
  computed: {
	...mapGetters(['allMessages', 'getContent']),
	content: {
		get: () => {
			() => this.getContent
		},
		set(value) {
			this.attemptInputChange({ name: 'content', value })
		}
	}
  },
  created() {
	this.fetchAllMessages()
  },
  mounted() {
	socket.on('newMsg', this.fetchAllMessages)
	// console.log(socket)
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
	}
	#submit-btn:hover {
		background-color: #F0A160;
	}
	#title {
		margin: 0.5em 0;
		display: flex;
		justify-content: center;
	}
</style>