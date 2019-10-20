<template>
  <div class="home">
  	<WorldChat
      :handlePost="attemptPostWorldMessage"
      :channelId="channelId"
      :eventToEmit="fetchAllMessages"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import socket from '../socket'
import WorldChat from '../components/ChatBox'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    WorldChat
  },

  methods: {
    ...mapActions(['fetchAllMessages', 'attemptPostWorldMessage'])
  },
  created() {
    this.fetchAllMessages({
      channelId: 'world'
    })
  },
  data() {
    return {
      channelId: 'world'
    }
  }

}
</script>
