import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import FavoriteList from './pages/FavoriteList'
import MangaChapter from './pages/MangaChapter'
import MangaDetail from './pages/MangaDetail'

const routes = [
    { path: '/', component: SignUp, name: 'SignUp', meta: { requiresAuth: false } },
    { path: '/login', component: LoginPage, name: 'LoginPage', meta: { requiresAuth: false } },
    { path: '/:user_id/home', component: HomePage, name: 'HomePage', meta: { requiresAuth: true } },
    { path: '/:user_id/favoritelist', component: FavoriteList, name: 'FavoriteList' },
    { path: '/:user_id/manga/:manga_id', component: MangaDetail, name: 'MangaDetail' },
    { path: '/:user_id/manga/:manga_id/chapter/:chapter_id', component: MangaChapter, name: 'MangaChapter' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router