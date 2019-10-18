<template>
	<div id="outer-box-msg-container">
		<div v-bind:class="[getLoggedInUser.id === message.senderId ? 'isUser' : 'isNotUser']" id="container" :key="message.id" v-for="message in messages">
			<div id="sender-box">
				<p>{{getLoggedInUser.id === message.senderId ? 'you' : message.User.username}}</p>
			</div>
			<div id="message-box">
				<p>{{message.content}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'MessageContainer',
  props: ['messages'],
  computed: {
	...mapGetters(['getLoggedInUser'])
  }
}
</script>

<style lang="css" scoped>
	#outer-box-msg-container {
		min-height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow-y: scroll;
	}

	.isUser {
		align-self: flex-start;
		/* background-color:  blue; */
	}

	.isNotUser {
		align-self: flex-end;
	}

	#container {
		max-width: 700px;
		min-width: 20%;
		/* width: auto; */
		/* min-width: 30px; */
		height: auto;
		border: 0.1em solid #444444;
		border-radius: 0.2em;
		margin: 0.1em 0.5em;
	}

	#message-box {
		padding: 0 0.5em 0.3em;
	}
	
	#sender-box {
		padding: 0.2em 0.5em 0.3em;
	}
</style>