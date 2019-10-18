<template>
	<div id="container">
		<h1>Login</h1>
		<form @submit.prevent="attemptLogin" id="form-container">
			<input placeholder="email" v-model="email" class="input"/>
			<input placeholder="password" type="password" v-model="password" class="input"/>
			<button class="submit-btn">
				Login
			</button>
		</form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  name: 'Login',
  methods: {
	...mapActions(['attemptLogin', 'attemptHandleInputChange'])
  },
  computed: {
	...mapGetters(['getUserLogin', 'getEmail']),
	email: {
		get() {
			() => this.getUserLogin.email
		}, 
		set (value) {
			this.attemptHandleInputChange({ name: 'email', value })
		}
	},
	password: {
		get() {
			() => this.getUserLogin.password
		},
		set (value) {
			this.attemptHandleInputChange({ name: 'password', value })
		}
	}
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
	#container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	#form-container {
		width: 30%;
		border: 0.1em solid #444444;
		padding: 2em 1em;
		display: flex;
		flex-direction: column;
	}
	.input {
		border: none;
		width: 70%;
		border-bottom: 0.1em solid #444;
		margin: 1em auto;
		outline: none;
	}

	.submit-btn {
		align-self: center;
		width: 70%
	}
</style>