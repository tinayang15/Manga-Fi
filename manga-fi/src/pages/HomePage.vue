<template>
    <div>
        <h1 class="mangaFiTitle">Manga-Fi</h1>
        <h2 class="slogan">Manga For Every Mood</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomePage',
    data: () => ({
        mangas: []
    }),
    mounted() {
        this.getMangas()
    },
    methods: {
        async getMangas() {
            const res = await axios.get(`http://127.0.0.1:5000/mangalist`)
            console.log(res)
            mangas = res.data
        }
    }
}
</script>

<style></style>