<template>
    <nav>
        <div class="navContainer">
            <div class="imglogo">
                <router-link to="/"><img :src="'https://i.imgur.com/ur91eKF.png'" alt="" class="logoimg"></router-link>
                <router-link to="/" class="linkHome">
                    <h1>Manga-Fi</h1>
                </router-link>

            </div>
            <div class="others">
                <router-link to="/" class="link">Home</router-link>
                <router-link to="/favoritelist" class="link">Favorites List</router-link>
                <router-link to="/about" class="link">About</router-link>
                <div v-if="isAuthenticated">
                    <router-link to="/login" class="link" @click="signOut">SignOut</router-link>
                </div>
                <div v-else>
                    <router-link to="/login" class="link">Login</router-link>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
    data: () => ({
        isAuthenticated: false
    }),
    mounted() {
        this.getAuthentication()
    },
    methods: {
        signOut() {
            this.isAuthenticated = false
            localStorage.removeItem('user_id')
            localStorage.removeItem('isAuthenticated')
            // localStorage.setItem('isAuthenticated', false)
        },
        getAuthentication() {
            const auth = localStorage.getItem('isAuthenticated')
            this.isAuthenticated = Boolean(auth)
            // console.log(this.isAuthenticated)
        }
    }
}
// console.log(isAuthenticated)
</script>

<style scoped>
nav {
    background: #C1EFAE;
    padding: 15px;
    font-size: 18px;
    font-family: 'Lobster', cursive;
    width: 100%;
    height: 100%;
}



.navContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.imglogo {
    display: flex;
    flex-direction: row;
    /* background: blue; */
    width: 200px;
    justify-content: space-around;
    font-size: 15px;
}

.logoimg {
    transition: .20s;

}

.logoimg:hover {

    transform: scale(1.06);
}

.logoimg:hover~.logoimg {
    transform: translateY(30px);
}

.linkHome {
    text-decoration: none;
    transition: .20s;
}

/* .navAddPatient {
  margin: 0 20px 0 0;
  display: flex;
  max-width: 50vh;
  background-color: rgb(208, 38, 224);
  border: 2px solid rgb(208, 38, 224);
  border-width: 15px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-items: center;
  justify-content: center;
} */

.linkHome:hover {

    transform: scale(1.06);
}

.linkHome:hover~.linkHome {
    transform: translateY(30px);
}


.link {
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
}

.link::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
}

.link:hover::before {
    visibility: visible;
    transform: scaleX(1);
}

.others {
    display: flex;
    flex-direction: row;
    /* background: green; */
    width: 800px;
    justify-content: space-around;
    align-items: center;
}

.logoimg {
    width: 55px;
    height: 60px;
    border-radius: 95%;
    border: 2px solid white;
}
</style>
