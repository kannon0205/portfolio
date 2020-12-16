<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/" class="home">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #bcb5b5;
  color: #fff;
}

nav {
  display: flex;
  justify-content: flex-end;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
}

ul {
  display: flex;
}

li {
  height: 3rem;
}

a {
  display: block;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s;
  border-radius: 4px;
}

a:hover {
  background-color: #f7b46b;
  transition: background-color 0.2s;
}

.home {
  margin-right: 2rem;
}
</style>

<script>
export default {
  name: "TheHeader",
  props: {}
};
</script>
