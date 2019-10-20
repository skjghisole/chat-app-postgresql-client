import User from './User'
const state = {
	messages: [],
	content: ''
}

const getters = {
	allMessages: state => state.messages,
	getContent: state => state.content,
}

const actions = {
	fetchAllMessages: async ({ commit }, { channelId }) => {
		const res = await fetch(`${process.env.VUE_APP_SERVER_URL}/messages?channelId=${channelId}`)
		const data = await res.json()
		commit('setMessages', data)
	},
	attemptPostWorldMessage: async ({ commit }) => {
		try {
			const { state: { user: { id } } } = User
			const data = {
				senderId: id,
				content: state.content,
				channelId: 'world'
			}
			console.log(data)
			commit('handlePost', data)
		} catch (e) {
			console.log(e)
		}
	},
	attemptInputChange: ({ commit }, data) => {
		commit('handleInputChange', data)
	},
	attemptPostMessage: async ({ commit, state }, { channelId }) => {
		try {
			const { state: { user: { id } } } = User
			const data = {
				senderId: id,
				content: state.content,
				channelId
			}
			console.log(data)
			commit('handlePost', data)
		} catch (e) {
			console.log(e)
		}
	},
	attemptReset: ({ commit }, toReset) => {
		commit('handleReset', toReset)
	}
}

const mutations = {
	setMessages: (state, messages) => {
		state.messages = messages
	},
	handleInputChange: (state, { name, value }) => {
		state[name] = value
	},
	handlePost: async (state, data) => {
		try {
			if (!data.content) throw new Error('Unable to send empty content')
			const res = await fetch(`${process.env.VUE_APP_SERVER_URL}/messages`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			await res.json()
		} catch (e) {
			console.log(e)
		}

	},
	handleReset: (state, data) => {
		console.log(data)
		state = { ...state, ...data }
		console.log(state)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
