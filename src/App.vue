<template>
  <div id="app">
    <Header :title="title" />
    <NavBar :routeLinks="routeLinks"/>
    <div id="app-container" v-bind:class="{ 'full-width': isSmaller, 'half-width': !isSmaller }">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header'
  import NavBar from './components/layout/NavBar'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "App",
    components: {
      Header,
      NavBar
    },
    methods: {
      ...mapActions(['attemptAuthenticateUser'])
    },
    computed: {
      ...mapGetters(['getLoggedInUser'])
    },
    async created() {
      await this.attemptAuthenticateUser()
    },
    mounted() {
      console.log(this.windowWidth)
    },
    data() {
      return {
        title: 'ChitChat',
        windowWidth: window.screen.width,
        isSmaller: window.screen.width < 900,
        routeLinks: [
          {
            route: '/',
            name: 'Home'
          },
          {
            route: '/about',
            name: 'About'
          },
          {
            route: '/login',
            name: 'Login'
          },
          {
            route: '/register',
            name: 'Register'
          }
        ]
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app-container {
    margin: auto;
  }

  .half-width {
    max-width: 60%;
  }

  .full-width {
    max-width: 100%;
  }

  .submit-btn {
    padding: 1em 0.2em;
    background-color: coral;
    color: #ffffff;
  }
</style>
