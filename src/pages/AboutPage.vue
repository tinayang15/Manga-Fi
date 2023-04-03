<template>
    <div class="aboutPage">
        <h1 class="aboutManga">About Manga-Fi</h1>
        <p class="slogan">Manga for Every Mood</p>
        <p class="description">Manga-Fi is the ultimate app for manga lovers everywhere. With a massive library of titles,
            customizable reading
            options, and a user-friendly interface, Manga-Fi makes it easy to read your favorite manga on the go. Whether
            you're a fan of action, romance, comedy, or horror, Manga-Fi has something for everyone. Plus, with our frequent
            updates and new releases, you'll always stay up to date with the latest and greatest manga titles.<br><br>

            At Manga-Fi, we believe that reading manga should be a fun, immersive experience. That's why we've created an
            app that puts you in control of your reading experience. Choose your preferred reading style, and with our
            community of manga fans,
            you'll always be in good company.<br><br>

            So why should you read manga on Manga-Fi? Simple - we provide an unbeatable combination of variety, convenience,
            and customization. Whether you're a long-time manga fan or a newcomer to the world of Japanese comics, Manga-Fi
            is the perfect app for unleashing your inner otaku.</p>
    </div>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
.aboutPage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
    margin: 20px 30px;
    font-size: 18px;
    background-color: #D7BBA8;
    border: 5px solid #f4eae2;
    padding: 15px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

.slogan {
    font-style: italic;
    margin-top: -15px;
}
</style>