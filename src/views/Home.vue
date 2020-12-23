<template>
  <section>
    <div class="home-container">
      <h1>
        <span class="title1">あさじま</span><span class="title2">の</span><br />
        ポートフォリオ
      </h1>
      <p class="top-image-container">
        <img
          alt="Vue logo"
          src="../assets/home-image.png"
          width="200"
          height="215"
        />
      </p>
    </div>
  </section>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 9rem);
  padding-top: 3rem;
}

h1 {
  font-family: "Nico Moji";
  font-size: 4rem;
  margin-bottom: 2rem;
}

.title1 {
  font-size: 6rem;
}

.title2 {
  font-size: 3rem;
}

.top-image-container {
  width: 200px;
  height: 215px;
}
</style>

<script>
export default {
  name: "Home"
};
</script>
