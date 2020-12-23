<template>
  <div>
    <work-modal v-if="openModal"></work-modal>
    <div class="wrapper">
      <section>
        <h2>Works</h2>
        <div class="flex-container">
          <item-container
            v-for="work in works"
            v-bind:key="work.id"
            v-bind:work="work"
          ><!-- eslint-disable-line -->
          </item-container>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import ItemContainer from "@/components/ItemContainer.vue";
import WorkModal from "@/components/WorkModal.vue";

export default {
  name: "Works",
  components: {
    ItemContainer,
    WorkModal
  },
  computed: {
    works() {
      return this.$store.getters.works;
    },
    openModal() {
      return this.$store.getters.openModal;
    }
  }
};
</script>
