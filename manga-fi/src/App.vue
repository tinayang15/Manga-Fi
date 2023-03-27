<template>
  <header>
    <NavBar v-if='isLoggedIn' />
  </header>
  <SignUp v-if='!isLoggedIn' @signup="handleSignup" />
  <LoginPage v-if='!isLoggedIn' @login="handleLogin" />
</template>

<script>
import SignUp from './pages/SignUp.vue'
import NavBar from './components/NavBar.vue'
import LoginPage from './pages/LoginPage.vue'

export default {
  name: 'App',
  components: {
    SignUp,
    NavBar,
    LoginPage
  },
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    handleSignup() {
      this.isLoggedIn = true
    },
    handleLogin() {
      this.isLoggedIn = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
