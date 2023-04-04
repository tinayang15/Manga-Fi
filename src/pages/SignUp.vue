<template>
    <div>
        <h1 class="signupTitle">Sign Up</h1>
        <form @submit="handleSubmit">
            <input placeholder="Enter Full Name" :value="newName" @input="handleChange('newName')" class="addName">
            <input placeholder="Enter Email" :value="newEmail" @input="handleChange('newEmail')" class="addName">
            <input placeholder="Enter Password" :value="newPassword" @input="handleChange('newPassword')" class="addName">
            <input placeholder="Enter Image Direct Link" :value="newImage" @input="handleChange('newImage')"
                class="addName">
            <button type="submit" class="addNameBtn">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'SignUp',
    data: () => ({
        newName: '',
        newEmail: '',
        newPassword: '',
        newImage: '',
    }),
    mounted() {

    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            const newUser = {
                name: this.newName,
                email: this.newEmail,
                password: this.newPassword,
                image: this.newImage
            }
            const res = await axios.post(`http://127.0.0.1:5000/users`, newUser)
            // localStorage.setItem('user_id', res.data.id)
            // const res = await axios.post(`http://localhost:5000/users`, newUser)
            console.log(res)
            this.$router.push('/login')
        },
        handleChange(name) {
            this[name] = event.target.value
        }
    }
}
</script>

<style></style>