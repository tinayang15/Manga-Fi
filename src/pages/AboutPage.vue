<template>
    <div class="aboutPage">
        <h1 class="aboutManga">About Manga-Fi</h1>
        <p class="slogan">Manga for Every Mood</p>
        <p class="description"> At Manga-Fi, we're all about embracing your inner otaku and indulging in the ultimate
            reading experience! With our vast selection of manga titles, you can explore and immerse yourself in a world of
            action, romance, comedy, or horror - whatever your mood may be! Our user-friendly interface and customizable
            reading options make it easy to get lost in your favorite manga, no matter where you are. Plus, with frequent
            updates and new releases, you'll always be on top of the latest and greatest manga trends. So what are you
            waiting for? Join our community of manga fans and let Manga-Fi take you on an exciting journey of discovery and
            fun!<br><br>
            What is an otaku (Oh-tah-koo)?<br>People who are passionate about anime, manga, video games, and all things
            Japanese pop culture! They love diving deep into the worlds of their favorite anime characters and can talk for
            hours about the intricate plot lines and character arcs. Otakus are also known for their awesome cosplay skills,
            often dressing up as their favorite characters at conventions and events. Whether you're a fan of shounen or
            shojo, action or romance, there's an otaku out there who shares your interests and can introduce you to a whole
            new world of fandom!
        </p>
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

@media only screen and (max-width: 767px) {}

@media only screen and (min-width: 768px) and (max-width: 1199px) {}

@media screen and (min-width: 1200px) {}
</style>