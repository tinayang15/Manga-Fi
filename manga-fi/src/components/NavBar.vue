<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/:user_id/favoritelist">Favorite List</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/login">Login</router-link>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
}
</script>

<style></style>
