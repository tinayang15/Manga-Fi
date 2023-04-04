<template>
    <div class="headerContainer">
        <h1 class="mangaTitle">{{ manga.title }}</h1>
        <img :src="manga.cover_url" alt="" class="image">
        <div class="titleFavorite">
            <div class="btn">
                <button class="favoriteBtn" @click="handleFavorite" v-if="isAuthenticated !== isAuth">❤️Add to
                    Favorites</button>
            </div>
        </div>
        <div class="details">
            <p class="mangaDetail">Author: {{ manga.author_name }}</p>
            <p class="mangaDetail">Released: {{ manga.year }} </p>
            <p class="mangaDetailSum">Summary: {{ manga.description }}</p>
            <p class="mangaDetail">Type: {{ manga.publication_demographic }}</p>
            <p class="mangaDetail">Genre(s): {{ manga.tags }}</p>
            <p class="mangaDetail">Status: {{ manga.status }}</p>
        </div>
        <div class="chaptersContainer">
            <h2 class="chaptersList">Chapters Released</h2>
            <div v-for="chapter in chapters" :key="chapter.id">
                <router-link :to="'/manga/' + manga.id + '/chapter/' + chapter.id" class="link">
                    <p class="chapters">Chapter: {{ chapter.chapter }}</p>
                </router-link>
            </div>
        </div>
        <div class="commentsContainer">
            <h1 class="commentsList">Manga Discussion</h1>
            <div class='comments' v-if="isAuthenticated !== isAuth">
                <button @click="showAddCommentForm = !showAddCommentForm" class="addCommentBtn">&nbsp;🔥Add Comment</button>
                <form v-if="showAddCommentForm" @submit="handleSubmit">
                    <textarea placeholder="Share your thoughts, fellow otaku!" :value="newContent"
                        @change="handleChange($event, 'newContent')" class='input' rows="4" cols="50"></textarea>
                    <button type='submit' class="addComment">Submit</button>
                </form>

                <div v-for="comment in comments" :key="comment.id" class="commentDisplay">
                    <p class="comment">{{ comment.content }}</p>

                    <button class='deleteBtn' @click="handleDelete(comment)">Delete</button>

                    <button class="updateBtn"
                        @click="showingUpdateForm[comment.id] = !showingUpdateForm[comment.id]">Edit</button>
                    <form v-if="showingUpdateForm[comment.id]" @submit="handleUpdate($event, comment)">
                        <textarea class='input' :value="comment.content" @change="handleChange($event, 'updateContent')"
                            rows="4" cols="50"></textarea>
                        <button type='submit' class="addComment">Submit</button>
                    </form>
                </div>
            </div>
            <div v-else class="comments">
                <p class="login">Please <router-link class='signinLink' to='/login'>sign in</router-link> to add or
                    edit/delete
                    comments.</p>
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
        isAuthenticated: false,
        isAuth: false
    }),
    mounted() {
        this.getAuthentication(),
            this.getMangaDetail(),
            this.getMangaComment()
    },
    methods: {
        getAuthentication() {
            const auth = localStorage.getItem('isAuthenticated')
            this.isAuth = Boolean(auth)
            console.log(this.isAuth)
            console.log(auth)
        },
        async getMangaDetail() {
            const response = await axios.get(`https://manga-fi.herokuapp.com/manga/${this.$route.params.manga_id}`)
            this.manga = response.data.data
            this.chapters = response.data.data.chapters.data
            console.log(response)
            console.log(this.chapters)
        },
        async getMangaComment() {
            const response = await axios.get(`https://manga-fi.herokuapp.com/comments/manga/${this.$route.params.manga_id}`)
            this.comments = response.data
            console.log(response)
        },
        async handleSubmit(e) {
            e.preventDefault()
            const newComment = {
                content: this.newContent,
                manga_id: `${this.$route.params.manga_id}`,
                user_id: localStorage.getItem('user_id')
            }
            const res = await axios.post(`https://manga-fi.herokuapp.com/comments`, newComment)
            this.showAddCommentForm = false
            this.newContent = ''
            console.log(res)
            this.getMangaComment()
        },
        handleChange(event, name) {
            this[name] = event.target.value
        },
        async handleDelete(comment) {
            const response = await axios.delete(`https://manga-fi.herokuapp.com/comments/${comment.id}`)
            console.log(response)
            this.getMangaComment()
        },
        async handleUpdate(e, comment) {
            e.preventDefault()
            const updatedComment = {
                content: this.updateContent
            }
            const res = await axios.put(`https://manga-fi.herokuapp.com/comments/${comment.id}`, updatedComment)
            console.log(res)
            this.showingUpdateForm[comment.id] = false
            this.getMangaComment()
        },
        async handleFavorite() {
            const userId = localStorage.getItem('user_id');
            const getFavoritesResponse = await axios.get(`https://manga-fi.herokuapp.com/user_manga_lists/user/${userId}`);

            if (getFavoritesResponse.data.length === 0) {
                const res = await axios.post(`https://manga-fi.herokuapp.com/user_manga_lists`, { user_id: localStorage.getItem('user_id'), manga_id: `${this.$route.params.manga_id}`, favorite_list: [`${this.$route.params.manga_id}`] });
                console.log(res)
                window.alert('Added to Favorites')
            } else {
                const favoriteListId = getFavoritesResponse.data[0].id;
                const currentFavorites = getFavoritesResponse.data[0].favorite_list;
                currentFavorites.push(`${this.$route.params.manga_id}`);
                const response = await axios.put(`https://manga-fi.herokuapp.com/user_manga_lists/${favoriteListId}`, { favorite_list: currentFavorites });
                console.log(response)
                window.alert('Added to Favorites')
            }
        }
    }
}
</script>

<style scoped>
img {
    width: 300px;
    height: 400px;
    margin-top: 15px;
    border: 2px solid #D7BBA8;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 25px;
}

.titleFavorite {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.mangaTitle {
    margin-top: 40px;
    max-width: 400px;
    font-weight: 700;
    text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.384);
}

.headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* //f8275ad6-a2d9-4488-89cc-5ddf7782ccf8 */
.favoriteBtn {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #F9D9E2;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    width: 130px;
    /* margin: 5px; */
    font-weight: 700;
    font-size: 12px;
}

.addCommentBtn {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #d9f9ed;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    width: 130px;
    /* margin: 5px; */
    font-weight: 700;
    font-size: 12px;
}

.deleteBtn {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #FFC9B5;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    width: 100px;
    /* margin: 5px; */
    font-weight: 700;
    font-size: 12px;
}

.updateBtn {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #FFFFB7;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    width: 100px;
    /* margin: 5px; */
    font-weight: 700;
    font-size: 12px;
}

.signinLink {
    color: #2662ee;
    text-decoration: none;
}

.favoriteBtn:hover,
.addCommentBtn:hover,
.deleteBtn:hover,
.updateBtn:hover {
    filter: brightness(150%);
    transition: 0.6s;
    transform: scale(1.06);
}

.link:hover {
    color: #d9f9ed;
}

.link {
    text-decoration: none;
    color: #2c3e50;
}

.details {
    width: 600px;
    text-align: left;
    background-color: #D7BBA8;
    border: 5px solid #f4eae2;
    padding: 10px;
    font-weight: 600;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1)
}

.chaptersContainer {
    text-align: center;
    margin-top: 40px;
    width: 600px;
    max-height: 600px;
    overflow-y: auto;
    background-color: #D7BBA8;
    border: 5px solid #f4eae2;
    padding: 10px;
    font-weight: 600;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1)
}

.commentsContainer {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 600px;
    max-height: 900px;
    overflow-y: auto;
    background-color: #D7BBA8;
    border: 5px solid #f4eae2;
    padding: 10px;
    font-weight: 600;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1)
}
</style>