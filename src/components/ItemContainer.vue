<template>
  <div class="container">
    <div class="box">
      <h3>
        {{ title }}
        <!-- title -->
      </h3>
      <p style="width: 300px; height: 188px">
        <img v-bind:src="img" alt="制作物イメージ" />
      </p>
      <p>
        <span>使用言語</span><br />
        {{ language }}
        <!-- HTML/CSS, PHP -->
      </p>
    </div>
  </div>
</template>

<style scoped>
img {
  border: 1px solid #2c3e50;
}

.box {
  text-align: center;
}
</style>

<script>
export default {
  name: "ItemContainer",
  props: ["title", "img", "language"]
};
</script>
