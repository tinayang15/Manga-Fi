<template>
    <div>
        <h1>Time to Read Otaku</h1>
        <div class="chapterContainer" v-for="data in chapterData" :key="data">
            <img :src="baseUrl + '/data/' + hash + '/' + data" alt="">

        </div>
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
            const response = await axios.get(`http://127.0.0.1:5000/manga/chapter/detail/${this.$route.params.chapter_id}`)
            this.chapterDetails = response.data.data
            this.chapterData = response.data.data.chapterData
            this.baseUrl = response.data.data.baseUrl
            this.hash = response.data.data.hash
            console.log(response)
        }
    }
}
</script>

<style></style>