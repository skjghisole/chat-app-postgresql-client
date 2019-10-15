<template>
	<div id="linkContainer">
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
}
</script>

<style lang="css" scoped>
	.link {
		text-decoration: none;
		font-size: 2em;
	}

	.link:hover {
		color: red;
	}

	#linkContainer {
		display: flex;
		text-align: center;
	}

</style>