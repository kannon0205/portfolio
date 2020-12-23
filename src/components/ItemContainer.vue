<template>
  <div class="container">
    <div class="box">
      <h3>
        {{ work.title }}
      </h3>
      <p class="img-container">
        <img
          v-bind:src="work.img"
          alt="制作物イメージ"
          width="300"
          height="188"
          v-on:click="
            openModal();
            changeModalContents(work);
          "
        />
      </p>
      <p>
        <span>使用言語</span><br />
        {{ work.language }}
      </p>
    </div>
  </div>
</template>

<style scoped>
img {
  border: 1px solid #2c3e50;
  cursor: pointer;
}

.box {
  text-align: center;
}
</style>

<script>
export default {
  name: "ItemContainer",
  props: ["work"],
  methods: {
    openModal() {
      this.$store.dispatch("openModalAction");
    },
    changeModalContents(work) {
      this.$store.dispatch("changeModalContentsAction", work);
    }
  }
};
</script>
