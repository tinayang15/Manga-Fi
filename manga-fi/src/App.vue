<template>
  <header>
    <NavBar />
    <div v-if="isLoggedIn">
      <button @click="handleSignout">Sign out</button>
    </div>
  </header>
  <!-- <SignUp v-if='!isLoggedIn && isSigningUp' @signup="handleSignup" /> -->
  <!-- <div v-if="!isLoggedIn && !isSigningUp"> -->
  <!-- <LoginPage v-if="!isLoggedIn && isSigningUp" @login="handleLogin" /> -->
  <!-- <HomePage v-if="isLoggedIn && !isSigningUp && isSignedUp" /> -->
  <!-- </div> -->
  <!-- <div v-if="isLoggedIn && !isSigningUp">
    <HomePage v-if="isLoggedIn" /> -->
  <!-- </div> -->
  <router-view></router-view>
</template>

<script>
import axios from 'axios'
// import SignUp from './pages/SignUp.vue'
import NavBar from './components/NavBar.vue'
// import LoginPage from './pages/LoginPage.vue'
// import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    // SignUp,
    NavBar,
    // LoginPage,
    // HomePage

  },
  data() {
    return {
      isLoggedIn: false,
      // isSigningUp: false,
      // isSignedUp: false,
    }
  },
  created() {
    if (this.$route.path === '/') {
      this.isSigningUp = true
    }
  },
  methods: {
    async handleSignup() {
      this.isSigningUp = true
      const newUser = {
        name: this.newName,
        email: this.newEmail,
        password: this.newPassword,
        image: this.newImage
      }
      try {
        const res = await axios.post(`http://127.0.0.1:5000/users`, newUser)
        console.log(res)
        this.$router.push('/login')
        // this.isLoggedIn = false // reset isLoggedIn
        // this.isSigningUp = false // set to false
        // this.isSignedUp = true
        // this.$router.push('/login')
        // this.isLoggedIn = true
        // this.isSigningUp = true
        // this.isSignedUp = true
        // localStorage.setItem('isLoggedIn', true)
      } catch (error) {
        console.log(error)
      }
    },
    // handleLogin() {
    //   this.isLoggedIn = true
    //   this.isSignedUp = true
    // },
    // showSignup() {
    //   this.isSigningUp = true
    // },
    // handleSignout() {
    //   this.isLoggedIn = false
    //   this.$router.push('/')
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
