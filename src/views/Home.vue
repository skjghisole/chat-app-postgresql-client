<template>
  <div class="home">
  	<WorldChat :messages="allMessages"  />
  </div>
</template>

<script>
// @ is an alias to /src
import WorldChat from '../components/ChatBox'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
	WorldChat
  },

  methods: {
	...mapActions(['fetchAllMessages'])
  },
  computed: {
	...mapGetters(['allMessages'])
  },
  created() {
    this.fetchAllMessages({
      channelId: 'world'
    })
  }
}
</script>
