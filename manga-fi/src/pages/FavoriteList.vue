<template>
    <div>
        <h1>Your Favorites List</h1>
        <!-- <div class="favoritesContainer" v-for="favorite in favorites" :key="favorite.id"> -->
        <router-link :to='"/manga/" + manga.id' class="mangaLink">
            <p> {{ manga.title }}</p>
            <img :src="manga.cover_url" alt="">
            <!-- </div> -->
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'FavoriteList',
    data: () => ({
        favorites: [],
        manga: []
    }),
    mounted() {
        this.getFavorites()
    },
    methods: {
        async getFavorites() {
            const response = await axios.get(`http://127.0.0.1:5000/user_manga_lists`)
            console.log(response)
            this.favorites = response.data.map(mangaId => mangaId.favorite_list)
            const newList = this.favorites[0].map(item => item)
            this.getManga(newList)
            console.log(this.favorites)
            console.log(newList)
        },
        async getManga(newList) {
            const response = await axios.get(`http://127.0.0.1:5000/manga/${newList[0]}`)
            // const response = await axios.get(`http://localhost:5000/manga/${this.$route.params.manga_id}`)
            this.manga = response.data.data
            console.log(response)
        },
    }
}
</script>

<style></style>