<template>
  <div class="wrapper">
    <section>
      <h2>Works</h2>
      <div class="flex-container">
        <item-container
          v-for="work in works"
          v-bind:key="work.title"
          v-bind:title="work.title"
          v-bind:img="work.img"
          v-bind:language="work.language"
          ><!-- eslint-disable-line -->
        </item-container>
      </div>
    </section>
  </div>
</template>

<style scoped></style>

<script>
import ItemContainer from "@/components/ItemContainer.vue";

export default {
  name: "Works",
  components: {
    ItemContainer
  },
  data() {
    return {
      works: [
        {
          title: "Portfolio",
          img: require("../assets/portfolio.png"),
          language: "HTML/CSS, JavaScript(Vue.js)"
        },
        {
          title: "ASBM",
          img: require("../assets/asbm.png"),
          language: "HTML/CSS, JavaScript(Node.js)"
        },
        {
          title: "PHPquest",
          img: require("../assets/phpquest.png"),
          language: "HTML/CSS, PHP"
        },
        {
          title: "YSC-PPC",
          img: require("../assets/ysc-ppc.png"),
          language: "HTML/CSS, Ruby(Ruby on Rails)"
        }
      ]
    };
  }
};
</script>
