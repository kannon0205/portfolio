<template>
  <div class="home">
    <h1>
      <span class="title1">あさじま</span><span class="title2">の</span><br />
      ポートフォリオ
    </h1>
    <p><img alt="Vue logo" src="../assets/home-image.png" width="200" /></p>
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
