<template>
  <div id="app">
    <div id="nav">
      <div class="back" v-if="$route.name !== 'Home'" @click="$router.back()">
        Back to Home
      </div>
      <h1>第三方套件</h1>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.back {
  position: fixed;
  font-size: 20px;
  border: 1px solid #2c3e50;
  width: 150px;
  text-align: center;
  cursor: pointer;
  left: 20px;
  top: 35px;
}

#nav {
 
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
