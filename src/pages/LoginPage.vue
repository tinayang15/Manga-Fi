<template>
    <div>
        <h1 class="loginTitle">Login</h1>
        <form @submit='handleSubmit'>
            <input placeholder="Enter Email" v-model="email" class="addName" @input="handleChange('email')">
            <input placeholder="Enter Password" v-model="password" class="addName" @input="handleChange('password')">
            <button type="submit" class="loginBtn">Log In</button>
        </form>
        <p>Not A User? Create Your Account <router-link to="/signup" class="link">Sign Up</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data: () => ({
        email: '',
        password: '',
        isAuthenticated: false,
    }),
    mounted() {
        // window.alert()
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            try {
                const users = await axios.get(`https://manga-fi.herokuapp.com//users`)
                const user = users.data.find(user => user.email === this.email && user.password == this.password)
                if (!user) {
                    window.alert('Invalid email or password')
                    return
                } else {
                    localStorage.setItem('user_id', user.id || '')
                    localStorage.setItem('isAuthenticated', true)
                    this.isAuthenticated = true
                    this.$router.push(`/`)
                }
            } catch (error) {
                console.log(error)
            }
        },
        handleChange(name) {
            this[name] = event.target.value
        }
    }
}
</script>

<style scoped></style>