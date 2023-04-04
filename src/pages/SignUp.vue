<template>
    <div class="signupContainer">
        <h1 class="signupTitle">Sign Up</h1>
        <form @submit="handleSubmit">
            <div class="signupForm">
                <input placeholder="Enter Full Name" :value="newName" @input="handleChange('newName')" class="input">
                <input placeholder="Enter Email" :value="newEmail" @input="handleChange('newEmail')" class="input">
                <input placeholder="Enter Password" :value="newPassword" @input="handleChange('newPassword')" class="input">
                <input placeholder="Enter Image Direct Link" :value="newImage" @input="handleChange('newImage')"
                    class="input">
                <button type="submit" class="registerBtn">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'SignUp',
    data: () => ({
        newName: '',
        newEmail: '',
        newPassword: '',
        newImage: '',
    }),
    mounted() {

    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            const newUser = {
                name: this.newName,
                email: this.newEmail,
                password: this.newPassword,
                image: this.newImage
            }
            const res = await axios.post(`https://manga-fi.herokuapp.com/users`, newUser)
            // localStorage.setItem('user_id', res.data.id)
            // const res = await axios.post(`http://localhost:5000/users`, newUser)
            console.log(res)
            this.$router.push('/login')
        },
        handleChange(name) {
            this[name] = event.target.value
        }
    }
}
</script>

<style scoped>
.signupContainer {
    margin: 60px auto 0;
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

.signupForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input {
    margin-bottom: 10px;
    font-size: 18px;
    width: 250px;
    text-align: center;
    font-style: italic;
    color: #2c3e50;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f4eae2;
}

.input:focus {
    outline: none;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

input::placeholder {
    color: #a5a5a5;
}

.registerBtn {
    margin-bottom: 20px;
    background-color: #d9f9ed;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    width: 100px;
    font-weight: 700;
    font-size: 15px;
}

.registerBtn:hover {
    filter: brightness(150%);
    transition: 0.6s;
    transform: scale(1.06);
}
</style>