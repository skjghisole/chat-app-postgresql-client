<template>
	<div class="container">
		<h1 id="title">
			World Chat
		</h1>
		<div id="outer-box">
			<div id="chat-container">
			</div>
			<div id="input-container">
				<div id="message-container">
					<input placeholder="Write something here" id="message-input" />
				</div>
				<div id="submission-container">
					<button id="submit-btn">SUBMIT</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'WorldChat',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
	#outer-box {
		display: flex;
		border: 0.1em solid coral;
		min-height: 700px;
		flex-direction: column;
	}
	#chat-container {
		border: 0.3em solid coral;
		flex: 7;
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