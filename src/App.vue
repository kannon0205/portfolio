<template>
  <div id="app">
    <div class="wrapper">
      <the-header />
      <transition name="view" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #bcb5b5;
  position: relative;
}

.wrapper {
  min-height: 100vh;
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 3rem;
}

.container {
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.4s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}
</style>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>
