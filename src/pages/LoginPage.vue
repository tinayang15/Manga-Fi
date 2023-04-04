<template>
    <div class="loginContainer">
        <h1 class="loginTitle">Login</h1>
        <form @submit='handleSubmit'>
            <div class="loginForm">
                <input placeholder="Enter Email" v-model="email" class="login" @input="handleChange('email')">
                <input placeholder="Enter Password" v-model="password" class="login" @input="handleChange('password')">
                <button type="submit" class="loginBtn">Log In</button>
            </div>
        </form>
        <p class="signup">Not An Otaku Yet? Create an Account <router-link to="/signup" class="link">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data: () => ({
        email: '',
        password: '',
        isAuthenticated: false,
    }),
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            try {
                const users = await axios.get(`https://manga-fi.herokuapp.com//users`)
                const user = users.data.find(user => user.email === this.email && user.password == this.password)
                if (!user) {
                    window.alert('Invalid email or password')
                    return
                } else {
                    localStorage.setItem('user_id', user.id || '')
                    localStorage.setItem('isAuthenticated', true)
                    this.isAuthenticated = true
                    this.$router.push(`/`)
                }
            } catch (error) {
                console.log(error)
            }
        },
        handleChange(name) {
            this[name] = event.target.value
        }
    }
}
</script>

<style scoped>
.loginContainer {
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 300px;
    text-align: left;
    background-color: #D7BBA8;
    border: 5px solid #f4eae2;
    padding: 10px;
    font-weight: 600;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1)
}

.loginForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login {
    margin-bottom: 5px;
    width: 250px;
    font-size: 18px;
    text-align: center;
    font-style: italic;
    color: #2c3e50;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f4eae2;
}

.loginBtn {
    margin-bottom: 20px;
    background-color: #d9f9ed;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    width: 90px;
    font-weight: 700;
    font-size: 15px;
}

.loginBtn:hover {
    filter: brightness(150%);
    transition: 0.6s;
    transform: scale(1.06);
}

.link:hover {
    color: #d9f9ed;
}

.link {
    text-decoration: none;
    color: #007af4;
}

/* @media only screen and (max-width: 767px) {}

@media only screen and (min-width: 768px) and (max-width: 1199px) {}

@media screen and (min-width: 1200px) {} */
</style>