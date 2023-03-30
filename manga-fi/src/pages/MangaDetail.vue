<template>
    <div>
        <img :src="manga.cover_url" alt="">
        <h1>{{ manga.title }}</h1>
        <p>Author: {{ manga.author_name }}</p>
        <p>Created </p>
        <p>Description: {{ manga.description }}</p>
        <p>{{ manga.publication_demographic }}</p>
        <p>Genres: {{ manga.tags }}</p>
    </div>
</div></template>

<script>
import axios from 'axios';


export default {
    name: 'MangaDetail',
    data: () => ({
        manga: '',
        chapters: []
    }),
    mounted() {
        this.getMangaDetail()
    },
    methods: {
        async getMangaDetail() {
            const response = await axios.get(`http://127.0.0.1:5000/manga/${this.$route.params.manga_id}`)
            // const response = await axios.get(`http://localhost:5000/manga/${this.$route.params.manga_id}`)
            this.manga = response.data.data
            this.chapters = response.data.data.chapters.data
            console.log(response)
            console.log(this.chapters)
        }
    }
}
</script>

<style></style>