<template>
  <div class="wrapper">
    <section>
      <h2>Profile</h2>
      <div class="flex-container">
        <div class="container">
          <h3>
            About
          </h3>
          <p>
            <a
              href="https://www.facebook.com/kamon.asajima.5"
              target="_blank"
              rel="noopener"
              ><v-fa :icon="['fab', 'facebook']" class="fa facebook"
            /></a>
            &nbsp;
            <a
              href="https://github.com/kannon0205"
              target="_blank"
              rel="noopener"
              ><v-fa :icon="['fab', 'github']" class="fa"
            /></a>
          </p>
          <p><span>名前</span><br />浅島嘉文 - Kamon Asajima</p>
          <p><span>生年月日</span><br />1991/2/5</p>
          <p><span>出身</span><br />埼玉県</p>
          <p>
            <span>趣味</span><br />ゲーム、競技観戦(野球、テニス、Esportsなど)
          </p>
          <p class="ta-justify">
            2020年5月からProgateを利用しプログラミングを学習開始。7月から職業訓練校アジャストアカデミーに入学し、12月に卒業。
          </p>
        </div>
        <div class="container">
          <h3>Skill</h3>
          <p>
            <span>作品を制作した</span><br />
            HTML/CSS, JavaScript(node.js), Vue.js, PHP, Ruby(Ruby on Rails),
            Github, heroku, PostgreSQL
          </p>
          <p>
            <span>使ったことがある</span><br />
            SCSS, MySQL, PhotoShop, Illustrator, AdobeXD, PremierePro
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fa {
  font-size: 2rem;
}

.container {
  text-align: left;
}

.facebook {
  color: #3b5998;
}
</style>

<script>
export default {
  name: "Profile"
};
</script>
