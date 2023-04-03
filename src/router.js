import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import FavoriteList from './pages/FavoriteList'
import MangaChapter from './pages/MangaChapter'
import MangaDetail from './pages/MangaDetail'
import AboutPage from './pages/AboutPage'

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/signup', component: SignUp, name: 'SignUp' },
    { path: '/login', component: LoginPage, name: 'LoginPage' },
    { path: '/favoritelist', component: FavoriteList, name: 'FavoriteList' },
    { path: '/about', component: AboutPage, name: 'AboutPage' },
    // { path: '/:user_id/manga/:manga_id', component: MangaDetail, name: 'MangaDetail' },
    // { path: '/:user_id/manga/:manga_id/chapter/:chapter_id', component: MangaChapter, name: 'MangaChapter' },
    { path: '/manga/:manga_id', component: MangaDetail, name: 'MangaDetail' },
    { path: '/manga/:manga_id/chapter/:chapter_id', component: MangaChapter, name: 'MangaChapter' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router