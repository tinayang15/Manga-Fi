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

export default {
    name: 'LoginPage',
    data: () => ({
    }),
    mounted() {

    },
    methods: {

    }
}
</script>

<style></style>