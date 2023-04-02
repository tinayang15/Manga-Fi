<template>
    <div>
        <h1 class="loginTitle">Login</h1>
        <form @submit='handleSubmit'>
            <input placeholder="Enter Email" v-model="email" class="addName" @input="handleChange('email')">
            <input placeholder="Enter Password" v-model="password" class="addName" @input="handleChange('password')">
            <button type="submit" class="loginBtn">Log In</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data: () => ({
        email: '',
        password: '',
        isAuthenticated: false
    }),
    mounted() {
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            try {
                const users = await axios.get(`http://127.0.0.1:5000/users`)
                const user = users.data.find(user => user.email === this.email && user.password == this.password)
                this.isAuthenticated = true
                console.log(user)
                if (!user) {
                    alert('Invalid email or password')
                    return
                } else {
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