<template>
  <header>
    <NavBar :key="$route.fullPath" />
  </header>

  <body>
    <router-view></router-view>

  </body>

  <footer>

    <section class="end">
      <div class="last-text">
        <p>&copy; 2023 by Manga-Fi All Rights Reserved.</p>
      </div>
    </section>
  </footer>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EADFC9;
}

header {
  height: 100%;
  width: 100%;
  background: #C1EFAE;
}

body {
  background-color: #EADFC9;
  height: 100%
}

footer {
  margin: 60px 0 0 0;
}
</style>
