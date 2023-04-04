<template>
    <div class="chapterContainer">
        <h1 class="title">Time to Read Otaku</h1>
        <router-link :to="'/manga/' + $route.params.manga_id" class="link">
            <button class="backBtn">Back To Manga</button>
        </router-link>
        <div class="detailContainer" v-for="data in chapterData" :key="data">
            <img class="image" :src="baseUrl + '/data/' + hash + '/' + data" alt="">
        </div>
        <router-link :to="'/manga/' + $route.params.manga_id" class="link">
            <button class="backBtn">Back To Manga</button>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'MangaChapter',
    data: () => ({
        chapterDetails: [],
        chapterData: [],
        baseUrl: '',
        hash: ''
    }),
    mounted() {
        this.getChapterDetails()
    },
    methods: {
        async getChapterDetails() {
            const response = await axios.get(`https://manga-fi.herokuapp.com/manga/chapter/detail/${this.$route.params.chapter_id}`)
            this.chapterDetails = response.data.data
            this.chapterData = response.data.data.chapterData
            this.baseUrl = response.data.data.baseUrl
            this.hash = response.data.data.hash
            console.log(response)
        },
    }
}
</script>

<style scoped>
.image {
    height: 1100px;
    width: 350px;
    border: 2px solid #D7BBA8;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

.backBtn {
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
</style>