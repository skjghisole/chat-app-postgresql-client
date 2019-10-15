<template>
  <div id="app">
    <Header :title="title" />
    <NavBar :routeLinks="routeLinks" />
    <div id="app-container">
      <router-view/>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
  import Header from './components/layout/Header'
  import NavBar from './components/layout/NavBar'
  export default {
    name: "App",
    components: {
      Header,
      NavBar
    },
    data() {
      return {
        title: 'ChitChat',
        routeLinks: [
          {
            route: '/',
            name: 'Home'
          },
          {
            route: '/about',
            name: 'About'
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
    max-width: 60%;
    margin: auto;
  }
</style>
