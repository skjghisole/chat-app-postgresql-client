<template>
	<div id="container">
		<div id="title">
			<h1>Login</h1>
		</div>
		<form @submit.prevent="attemptLogin" id="form-container">
			<input placeholder="email" v-model="email" />
			<input placeholder="password" type="password" v-model="password"/>
			<button>
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
</style>