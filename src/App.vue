<template>
  <div id="app">
    <the-header />
    <transition name="view" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>
