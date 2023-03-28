<template>
    <div>
        <h1 class="loginTitle">Login</h1>
        <form @submit='handleSubmit'>
            <input placeholder="Enter Email" v-model="email" class="addName">
            <input placeholder="Enter Password" v-model="password" class="addName">
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
        password: ''
    }),
    mounted() {
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            try {
                const users = await axios.get(`http://127.0.0.1:5000/users`)
                const user = users.data.find(user => user.email === this.email && user.password == this.password)
                if (!user) {
                    alert('Invalid email or password')
                    return
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style></style>