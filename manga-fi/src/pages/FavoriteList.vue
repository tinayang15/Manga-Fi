<template>
    <div>
        <h1>Your Favorites List</h1>
        <div class="favoritesContainer" v-for="manga in mangaList" :key="manga.id">
            <router-link :to='"/manga/" + manga.id' class="mangaLink">
                <p> {{ manga.title }}</p>
                <img :src="manga.cover_url" alt="">
            </router-link>
            <!-- <div class="manga">
            <router-link :to='"/manga/" + manga.id' class="mangaLink">
                <p> {{ manga.title }}</p>
                <img :src="manga.cover_url" alt="">
                </div> -->
            <!-- </router-link> -->
            <!-- </div> -->
            <!-- <div class="manga">
            <router-link :to='"/manga/" + manga2.id' class="mangaLink">
                <p> {{ manga2.title }}</p>
                <img :src="manga2.cover_url" alt=""> -->
            <!-- </div> -->
            <!-- </router-link>
        </div>
        <div class="manga">
            <router-link :to='"/manga/" + manga3.id' class="mangaLink">
                <p> {{ manga3.title }}</p>
                <img :src="manga3.cover_url" alt=""> -->
            <!-- </div> -->
            <!-- </router-link> -->
            <!-- </div>
        <div class="manga">
            <router-link :to='"/manga/" + manga4.id' class="mangaLink">
                <p> {{ manga4.title }}</p>
                <img :src="manga4.cover_url" alt="">
            </router-link>
        </div>
        <div class="manga">
            <router-link :to='"/manga/" + manga5.id' class="mangaLink">
                <p> {{ manga5.title }}</p>
                <img :src="manga5.cover_url" alt="">
            </router-link>
        </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'FavoriteList',
    data: () => ({
        favorites: [],
        // manga: [],
        // manga2: [],
        // manga3: [],
        // manga4: [],
        // manga5: [],
        mangaList: []
    }),
    mounted() {
        this.getFavorites()
    },
    methods: {
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
        // async getManga(newList) {
        //     const response = await axios.get(`http://127.0.0.1:5000/manga/${newList[0]}`)
        //     const response2 = await axios.get(`http://127.0.0.1:5000/manga/${newList[1]}`)
        //     const response3 = await axios.get(`http://127.0.0.1:5000/manga/${newList[2]}`)
        //     const response4 = await axios.get(`http://127.0.0.1:5000/manga/${newList[3]}`)
        //     const response5 = await axios.get(`http://127.0.0.1:5000/manga/${newList[4]}`)
        //     // const response = await axios.get(`http://localhost:5000/manga/${this.$route.params.manga_id}`)
        //     this.manga = response.data.data
        //     this.manga2 = response2.data.data
        //     this.manga3 = response3.data.data
        //     this.manga4 = response4.data.data
        //     this.manga4 = response5.data.data
        //     console.log('mangaresponse', response)
        //     console.log('mangaresponse2', response2)
        //     console.log('mangaresponse3', response3)
        //     console.log('mangaresponse4', response4)
        //     console.log('mangaresponse5', response5)
        // },
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