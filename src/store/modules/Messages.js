const state = {
	// messages: [{
	// 	id: 'asd1234',
	// 	content: 'Hello there',
	// 	sender: 'Mike'
	// }, {
	// 	id: 'asd1235',
	// 	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	// 	sender: 'Clark'
	// },
	// {
	// 	id: 'asd123',
	// 	content: 'Hello there',
	// 	sender: 'Toby'
	// }]
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
