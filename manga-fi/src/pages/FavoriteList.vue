<template>
    <div>
        <h1>Your Favorites List</h1>
        <div v-if="isAuthenticated !== isAuth">
            <div v-if="mangaList.length > 0">
                <div class="favoritesContainer" v-for="manga in mangaList" :key="manga.id">
                    <router-link :to='"/manga/" + manga.id' class="mangaLink">
                        <p> {{ manga.title }}</p>
                        <img :src="manga.cover_url" alt="">
                    </router-link>
                </div>
            </div>
            <div v-else>
                <p>No favorite manga(s) added, Otaku!</p>
            </div>
        </div>
        <div v-else>
            <p>Please <router-link to='/login'>sign in</router-link> to view your favorite's list.</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'FavoriteList',
    data: () => ({
        favorites: [],
        mangaList: [],
        isAuthenticated: false,
        isAuth: false
    }),
    mounted() {
        this.getAuthentication(),
            this.getFavorites()
    },
    methods: {
        getAuthentication() {
            const auth = localStorage.getItem('isAuthenticated')
            this.isAuth = Boolean(auth)
            // console.log(isAuthenticated)
            console.log(this.isAuth)
            console.log(auth)
        },
        async getFavorites() {
            const userId = localStorage.getItem('user_id')
            const response = await axios.get(`http://127.0.0.1:5000/user_manga_lists/user/${userId}`)
            console.log('response', response)
            // const res = await axios.put(`http://127.0.0.1:5000/user_manga_lists`)
            this.favorites = response.data.map(mangaId => mangaId.favorite_list)
            const newList = this.favorites[0].map(item => item)
            this.getManga(newList)
            console.log('favorites', this.favorites)
            console.log('newlist', newList)
        },
        async getManga(newList) {
            const responses = []
            for (let i = 0; i < newList.length; i++) {
                if (newList[i]) {
                    const response = await axios.get(`http://127.0.0.1:5000/manga/${newList[i]}`)
                    responses.push(response.data.data)
                }
            }
            this.mangaList = responses
        }

    }
}
</script>

<style></style>