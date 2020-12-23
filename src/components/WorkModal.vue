<template>
  <transition name="modal" appear>
    <section>
      <div class="over-lay" v-on:click.self="closeModal">
        <div class="modal-window">
          <h3>{{ modalContents.title }}</h3>
          <div class="flex-container">
            <p class="img-container">
              <img
                v-bind:src="modalContents.img"
                alt="制作物イメージ"
                width="300"
                height="188"
              />
            </p>
          </div>
          <div class="flex-container">
            <p class="page-link">
              <a v-bind:href="modalContents.page" target="_blank" rel="noopener"
                >Page</a
              >
            </p>
            <p>
              <a
                v-bind:href="modalContents.github"
                target="_blank"
                rel="noopener"
                >Github</a
              >
            </p>
          </div>
          <p class="ta-justify">
            {{ modalContents.comment }}
          </p>
          <p><span class="close-modal" v-on:click="closeModal">閉じる</span></p>
        </div>
      </div>
    </section>
  </transition>
</template>

<style scoped>
.over-lay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-window {
  z-index: 100;
  max-width: 60%;
  min-width: 400px;
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
  overflow: hidden;
}

.page-link {
  margin-right: 2rem;
}

img {
  border: 1px solid #2c3e50;
}

h3 {
  text-align: center;
}

a {
  color: #f7b46b;
}

/* animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

@media screen and (max-width: 480px) {
  .modal-window {
    min-width: 100vw;
    border-radius: 0;
    overflow-y: scroll;
  }
  .ta-justify {
    text-align: left;
  }
}
</style>

<script>
export default {
  name: "WorkModal",
  computed: {
    openModal() {
      return this.$store.getters.openModal;
    },
    modalContents() {
      return this.$store.getters.modalContents;
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch("closeModalAction");
    }
  }
};
</script>
