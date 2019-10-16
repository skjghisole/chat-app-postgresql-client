<template>
	<div id="outer-box">
		<div id="container" :key="message.id" v-for="message in messages">
			<div id="sender-box">
				<p>{{message.sender}}</p>
			</div>
			<div id="message-box">
				<p>{{message.content}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'MessageContainer',
  props: ['messages']
}
</script>

<style lang="css" scoped>
	#outer-box {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
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

	}
	
	#sender-box {

	}
</style>