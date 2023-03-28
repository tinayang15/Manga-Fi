<template>
  <header>
    <NavBar v-if='isLoggedIn && $route.meta.requiresAuth' />
  </header>
  <SignUp v-if='!isLoggedIn && !isSigningUp' @signup="handleSignup" />
  <div v-if="isSignedUp && !isSigningUp">
    <LoginPage v-if='!isLoggedIn' @login="handleLogin" />
  </div>
  <div v-if="isLoggedIn && !isSigningUp">
    <HomePage v-if="isLoggedIn" />
  </div>
</template>

<script>
import SignUp from './pages/SignUp.vue'
import NavBar from './components/NavBar.vue'
import LoginPage from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    SignUp,
    NavBar,
    LoginPage,
    HomePage

  },
  data() {
    return {
      isLoggedIn: false,
      isSigningUp: false,
      isSignedUp: false,
    }
  },
  created() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  },
  methods: {
    handleSignup() {
      this.isSigningUp = true
      setTimeout(() => {
        this.isSigningUp = false
        this.isSignedUp = true
        this.isLoggedIn = true
      }, 2000)
    },
    handleLogin() {
      this.isLoggedIn = true
    },
    // showSignup() {
    //   this.isSigningUp = true
    // }
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
