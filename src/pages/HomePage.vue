<template>
    <div class="homeContainer">
        <h1 class="mangaFiTitle">Manga-Fi</h1>
        <h2 class="slogan">Manga For Every Mood</h2>
        <div class="mangaListContainer">

            <div class="mangaList" v-for="manga in mangas" :key="manga.manga_id">
                <div class="mangaContainer">

                    <router-link :to='"/manga/" + manga.manga_id' class="mangaLink">
                        <img :src="manga.cover_url" alt="" class="image" />
                        <h3 class="mangaTitle">Title: {{ manga.title }}</h3>
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
    }),
    mounted() {
        this.getMangas()
    },
    methods: {
        async getMangas() {
            const res = await axios.get(`https://manga-fi.herokuapp.com/mangalist`)
            this.mangas = res.data.data
        }
    }
}
</script>

<style scoped>
.mangaLink {
    text-decoration: none;
}

.mangaContainer {
    border: 2px solid #D7BBA8;
    border-radius: 20px;
    width: 300px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1)
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
}

.mangaFiTitle {
    font-size: 4rem;
    margin-top: 50px;
    margin-bottom: 20px;
}

.slogan {
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 50px;
    margin-top: -20px;
}

.mangaTitle {
    font-size: 1.5rem;
    margin-top: 10 px;
    text-align: center;
}

.mangaContainer:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rbga(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shdow 0.3s ease-in-out;
}

/* @media only screen and (min-width: 300px) {} */

@media only screen and (max-width: 767px) {
    .mangaFiTitle {
        font-size: 30px;
    }

    .slogan {
        font-size: 13px;
    }

    .mangaContainer {
        width: 200px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 10px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1)
    }

    img {
        width: 100px;
        height: 150px;
    }

    .mangaTitle {
        font-size: 1rem;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    .mangaFiTitle {
        font-size: 40px;
    }

    .slogan {
        font-size: 16px;
    }

    .mangaTitle {
        font-size: 1.2rem
    }

    .mangaContainer {
        width: 250px;
        height: 450px;
        margin: 15px 10px;
    }

    img {
        width: 150px;
        height: 225px;
    }
}

/* @media screen and (min-width: 1200px) {} */
</style>