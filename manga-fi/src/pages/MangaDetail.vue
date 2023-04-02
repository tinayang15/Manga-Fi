<template>
    <div>
        <img :src="manga.cover_url" alt="">
        <h1>{{ manga.title }}</h1>
        <button @click="handleFavorite">Add to Favorites</button>
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
            <div v-if="isAuthenticated">
                <button @click="showAddCommentForm = !showAddCommentForm">Add Comment</button>
                <form v-if="showAddCommentForm" @submit="handleSubmit">
                    <textarea placeholder="Share your thoughts, fellow otaku!" :value="newContent"
                        @change="handleChange($event, 'newContent')" class='newCommentInput' rows="4" cols="50"></textarea>
                    <button type='submit' class="addComment">Submit</button>
                </form>

                <div v-for="comment in comments" :key="comment.id">
                    <p>{{ comment.content }}</p>

                    <button @click="handleDelete(comment)">Delete</button>

                    <button @click="showingUpdateForm[comment.id] = !showingUpdateForm[comment.id]">Edit</button>
                    <form v-if="showingUpdateForm[comment.id]" @submit="handleUpdate($event, comment)">
                        <textarea :value="comment.content" @change="handleChange($event, 'updateContent')"
                            class='newContentInput' rows="4" cols="50"></textarea>
                        <button type='submit' class="addComment">Submit</button>
                    </form>
                </div>
            </div>
            <div v-else>
                <p>Please <router-link to='/login'>sign in</router-link> to add or edit/delete comments.</p>
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
        newContent: '',
        updateContent: '',
        showingUpdateForm: {},
        showAddCommentForm: false,
        favorites: [],
        isAuthenticated: false
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
        },
        async handleSubmit(e) {
            e.preventDefault()
            const newComment = {
                content: this.newContent,
                manga_id: `${this.$route.params.manga_id}`,
                user_id: 1
            }
            const res = await axios.post(`http://127.0.0.1:5000/comments`, newComment)
            this.showAddCommentForm = false
            this.newContent = ''
            console.log(res)
            this.getMangaComment()
        },
        handleChange(event, name) {
            this[name] = event.target.value
        },
        async handleDelete(comment) {
            const response = await axios.delete(`http://127.0.0.1:5000/comments/${comment.id}`)
            console.log(response)
            this.getMangaComment()
            // const index = this.comments.findIndex(c => c.id === comment.id);
            // this.comments.splice(index, 1);
        },
        async handleUpdate(e, comment) {
            // console.log('here', comment)
            e.preventDefault()
            const updatedComment = {
                // ...comment,
                content: this.updateContent
            }
            const res = await axios.put(`http://127.0.0.1:5000/comments/${comment.id}`, updatedComment)
            console.log(res)
            this.showingUpdateForm[comment.id] = false
            this.getMangaComment()
        },
        // async handleFavorite() {
        //     const favorite = {
        //         user_id: localStorage.getItem('user_id'),
        //         manga_id: `${this.$route.params.manga_id}`,
        //         favorite_list: [`${this.$route.params.manga_id}`]
        //     }
        //     this.favorites.push(favorite)
        //     console.log("new", favorite)
        //     const userId = localStorage.getItem('user_id')
        //     const userFavorites = await axios.get(`http://127.0.0.1:5000/user_manga_lists/user/${userId}`)
        //     const response = await axios.post(`http://127.0.0.1:5000/user_manga_lists`, favorite)
        //     const res = await axios.put(`http://127.0.0.1:5000/user_manga_lists`, favorite)
        //     console.log("here", response)
        // }
        async handleFavorite() {
            const userId = localStorage.getItem('user_id');
            const getFavoritesResponse = await axios.get(`http://127.0.0.1:5000/user_manga_lists/user/${userId}`);

            if (getFavoritesResponse.data.length === 0) {
                const res = await axios.post(`http://127.0.0.1:5000//user_manga_lists`, { user_id: userId, manga_id: `${this.$route.params.manga_id}`, favorite_list: [`${this.$route.params.manga_id}`] });
                console.log(res)
            } else {
                // const favoriteListId = getFavoritesResponse.data[0].id;
                // const response = await axios.put(`http://127.0.0.1:5000/user_manga_lists/user/${userId}`, { favorite_list: [`${this.$route.params.manga_id}`] });
                // console.log(response)
                const favoriteListId = getFavoritesResponse.data[0].id;
                const currentFavorites = getFavoritesResponse.data[0].favorite_list;
                currentFavorites.push(`${this.$route.params.manga_id}`);
                const response = await axios.put(`http://127.0.0.1:5000/user_manga_lists/${favoriteListId}`, { favorite_list: currentFavorites });
                console.log(response)
            }
            // this.getFavorites();
        }

    }
}
</script>

<style></style>