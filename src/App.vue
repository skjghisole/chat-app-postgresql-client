<template>
  <div id="app">
    <Header title="ChitChat" />
    <div id="app-container">

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
  export default {
    name: "App",
    components: {
      Header
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
