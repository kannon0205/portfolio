<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="indent">|</li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  color: #fff;
  font-family: "Josefin Sans", sans-serif;
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
  position: fixed;
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

.indent {
  margin: 0 1rem;
  line-height: 3rem;
}
</style>

<script>
export default {
  name: "TheHeader"
};
</script>
