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

    }),
    mounted() {

    },
    methods: {
    }
}
</script>

<style></style>