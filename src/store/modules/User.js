import jwt from 'jsonwebtoken'

const state = {
	userLogin: {
		email: '',
		password: ''
	},
	user: null,
	token: null
}

const getters = {
	getUserLogin: (state) => state.userLogin,
	getLoggedInUser: (state) => state.user
}

const actions = {
	attemptHandleInputChange: ({ commit }, { name, value }) => {
		commit('setUserLogin', { name, value })
	},
	attemptAuthenticateUser: async ({ commit, state }) => {
		try {
			const token = localStorage.getItem('token')
			if (!token && !state.token) throw new Error ('User not authenticated!')
			commit('saveToken', token)
		} catch (e) {
			console.log(e)
		}
	},
	attemptLogin: async ({ commit, state }) => {
		const { userLogin } = state
		try {
			const res = await fetch(`${process.env.VUE_APP_SERVER_URL}/users/login`, {
				method: 'POST', 
				body: JSON.stringify({...userLogin}), // data can be `string` or {object}!
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const data = await res.json()
			const { token } = data
			localStorage.setItem('token', token)
			commit('saveToken', token)
		} catch (e) {
			console.log(e)
		}
	}
}

const mutations = {
	setUserLogin: (state, { name, value }) => (state.userLogin[name] = value),
	saveToken: async (state, token) => {
		try {
			const user = await jwt.verify(token, process.env.VUE_APP_SECRET_KEY)
			state.token = token
			state.user = user
		} catch(e) {
			console.error(e)
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}