const state = {
	messages: []
}

const getters = {
	allMessages: state => state.messages
}

const actions = {
	async fetchAllMessages({ commit }) {
		const res = await fetch('http://localhost:2020/messages')
		const data = await res.json()
		commit('setMessages', data)
	}
}

const mutations = {
	setMessages: (state, messages) => {
		state.messages = messages
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
