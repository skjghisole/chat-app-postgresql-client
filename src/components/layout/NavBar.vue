<template>
	<div id="linkContainer" v-bind:class="[isSmaller ? 'smallerScreen' : 'biggerScreen']">
		<router-link
			:to="routeLink.route"
			:key="routeLink.name"
			v-for="routeLink in routeLinks"
			class="link"
		>
			{{routeLink.name}}
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['routeLinks'],
  data() {
	return {
		isSmaller: window.screen.width < 900
	}
  }
}
</script>

<style lang="css" scoped>
	.link {
		text-decoration: none;
		margin: 0 1em;
		font-size: 2em;
		color: #f4f4f4;
	}

	.link:hover {
		color: coral;
	}

	#linkContainer {
		display: flex;
		justify-content: center;
		align-content: space-around;
		background-color: #444444;
	}

	.biggerScreen {
		flex-direction: row;
	}

	.smallerScreen {
		flex-direction: column;
	}
</style>