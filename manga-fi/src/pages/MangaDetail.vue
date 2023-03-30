<template>
    <div>
        <img :src="manga.cover_url" alt="">
        <h1>{{ manga.title }}</h1>
        <p>Author: {{ manga.author_name }}</p>
        <p>Created: {{ manga.year }} </p>
        <p>Description: {{ manga.description }}</p>
        <p>{{ manga.publication_demographic }}</p>
        <p>Genres: {{ manga.tags }}</p>
        <div>
            <h3>Chapters</h3>
            <div v-for="chapter in chapters" :key="chapter.id">
                <!-- <router-link :to=`"/manga/" + manga.id + "/chapter/" + chapter.id`> -->
                <router-link :to="'/manga/' + manga.id + '/chapter/' + chapter.id">
                    <p>Chapter: {{ chapter.chapter }}</p>
                </router-link>
            </div>
        </div>
        <div class="commentsContainer">
            <h1>Comments</h1>
            <button>Add Comment</button>
            <form @submit="handleSubmit">
                <input placeholder="Share your thoughts, fellow otaku!" :value="newComment" @change="handleChange"
                    class='newCommentInput'>
                <button type='submit' class="addComment">Submit</button>
            </form>
            <div v-for="comment in comments" :key="comment.id">
                <p>{{ comment.content }}</p>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'MangaDetail',
    data: () => ({
        manga: '',
        chapters: [],
        comments: [],
        newComment: ''
    }),
    mounted() {
        this.getMangaDetail(),
            this.getMangaComment()
    },
    methods: {
        async getMangaDetail() {
            const response = await axios.get(`http://127.0.0.1:5000/manga/${this.$route.params.manga_id}`)
            // const response = await axios.get(`http://localhost:5000/manga/${this.$route.params.manga_id}`)
            this.manga = response.data.data
            this.chapters = response.data.data.chapters.data
            console.log(response)
            console.log(this.chapters)
        },
        async getMangaComment() {
            const response = await axios.get(`http://127.0.0.1:5000/comments/manga/${this.$route.params.manga_id}`)
            this.comments = response.data
            console.log(response)
        }

    }
}
</script>

<style></style>