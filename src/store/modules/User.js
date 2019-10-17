const state = {
	userLogin: {
		email: '',
		password: ''
	}
}

const getters = {
	getUserLogin: (state) => state.userLogin,
}

const actions = {
	attemptHandleInputChange: ({ commit }, { name, value }) => {
		commit('setUserLogin', { name, value })
	},
	attemptLogin: async ({ commit, state }) => {
		const { userLogin } = state
		try {
			const res = await fetch('http://localhost:2020/users/login', {
				method: 'POST', 
				body: JSON.stringify({...userLogin}), // data can be `string` or {object}!
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(res)
			const data = await res.json()
			console.log(data)
		} catch (e) {
			console.log(e)
		}
		
			// commit('attemptLogin', {
			// 	email,
			// 	password
			// })
	}
}

const mutations = {
	setUserLogin: (state, { name, value }) => (state.userLogin[name] = value)
}

export default {
	state,
	getters,
	actions,
	mutations
}