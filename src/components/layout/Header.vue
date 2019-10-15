<template>
	<div class="container">
		<h1 id="title">
			{{title}}
		</h1>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: ['title'],
	}
</script>

<style lang="css" scoped>
	.container {
		height: 70px;
		background-color: coral;
		font-family: Helvetica, Arial;
		position: sticky;
		top: 0;
	}

	h1 {

	}

	#title {
		padding: 20px 10px;
		letter-spacing: 0.2em;
	}

</style>