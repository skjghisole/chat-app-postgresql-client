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
	fetchAllMessages: async ({ commit }) => {
		const res = await fetch('http://localhost:2020/messages')
		const data = await res.json()
		commit('setMessages', data)
	},
	attemptInputChange: ({ commit }, data) => {
		commit('handleInputChange', data)
	},
	attemptPostMessage: async ({ commit, state }) => {
		try {
			const { state: { user: { id } } } = User
			const data = {
				senderId: id,
				content: state.content
			}
			console.log(data)
			commit('handlePost', data)
		} catch (e) {
			console.log(e)
		}
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
		const res = await fetch('http://localhost:2020/messages', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const message = await res.json()
		console.log(message)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
