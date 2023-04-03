<template>
    <div class="homeContainer">
        <h1 class="mangaFiTitle">Manga-Fi</h1>
        <h2 class="slogan">Manga For Every Mood</h2>
        <div class="mangaListContainer">

            <div class="mangaList" v-for="manga in mangas" :key="manga.manga_id">
                <div class="mangaContainer">

                    <router-link :to='"/manga/" + manga.manga_id' class="mangaLink">
                        <img :src="manga.cover_url" alt="" />
                        <h3>Title: {{ manga.title }}</h3>
                        <!-- <p>Author: {{ name.name }}</p> -->
                        <!-- <p>Author: {{ manga.author_name }}</p>
                        <p>Synopsis: {{ manga.description_english }}</p>
                        <p>Status: {{ manga.status }}</p>
                        <p> State: {{ manga.state }}</p>
                        <p> Year Created: {{ manga.year }}</p> -->
                        <p> Genres: {{ manga.tags }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomePage',
    data: () => ({
        mangas: [],
        // authorNames: []
    }),
    mounted() {
        // location.reload()
        this.getMangas()
    },
    methods: {
        async getMangas() {
            const res = await axios.get(`http://127.0.0.1:5000/mangalist`)
            console.log(res)
            this.mangas = res.data.data
            // const authorIds = this.mangas.map(manga => manga.author_id)
            // console.log(authorIds)
            // this.authorNames = await axios.get(`http://127.0.0.1:5000/manga/author/${authorIds}`)
        }
    }
}
</script>

<style scoped>
.mangaLink {
    text-decoration: none;
}

.mangaContainer {
    border-top: 2px solid black;
    max-width: 300px;
    max-height: 500px;
    overflow-y: scroll;
}

img {
    width: 200px;
    height: 300px;
}

.mangaListContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.homeContainer {
    background-color: #EADFC9
        /* background-color: #ECECEC */
}
</style>