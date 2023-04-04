<template>
    <div class="favoriteContainer">
        <h1 class="title">Otaku's Favorites List ❤️</h1>
        <div v-if="isAuthenticated !== isAuth" class="listContainer">
            <div v-if="mangaList.length > 0">
                <div class="favoritesContainer" v-for="manga in mangaList" :key="manga.id">
                    <router-link :to='"/manga/" + manga.id' class="mangaLink">
                        <p class="mangaTitle"> {{ manga.title }}</p>
                        <img class="image" :src="manga.cover_url" alt="">
                    </router-link>
                </div>
            </div>
            <div v-else>
                <p class="noFavor">No favorite manga(s) added, Otaku!</p>
            </div>
        </div>
        <div v-else>
            <p class="signIn">Please <router-link to='/login' class="signinLink">sign in</router-link> to view your
                favorite's list.</p>
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
            const response = await axios.get(`https://manga-fi.herokuapp.com/user_manga_lists/user/${userId}`)
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
<style scoped>
.favoriteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mangaTitle {
    margin-top: 20px;
    max-width: 400px;
    font-weight: 700;
    text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.384);
}

img {
    width: 300px;
    height: 400px;
    margin-top: 2px;
    border: 2px solid #D7BBA8;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1)
}

.favoritesContainer {
    background-color: red;
    padding: 10px;
    margin-bottom: 20px;
    width: 450px;
    text-align: center;
    background-color: #D7BBA8;
    border: 5px solid #f4eae2;
    padding: 10px;
    font-weight: 600;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.signinLink {
    color: #2662ee;
    text-decoration: none;
}

.signIn {
    font-size: 18px;
    font-weight: 500;
    margin-top: -10px;
}
</style>