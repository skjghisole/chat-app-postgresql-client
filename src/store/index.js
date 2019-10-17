import Vuex from 'vuex'
import Vue from 'vue'
import messages from './modules/Messages'
import user from './modules/User'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		messages,
		user
	}
})

export default store