import Vuex from 'vuex'
import Vue from 'vue'
import messages from './modules/Messages'


Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		messages
	}
})

export default store