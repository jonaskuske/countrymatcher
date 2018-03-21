<template>
  <div class="view selection">
    <main-header :back-to="'/tutorial'" :title="'Selection'" />
    <div
      v-if="currentCategory"
      v-touch:swipe.left="dismiss"
      v-touch:swipe.right="accept"
    >
      {{ currentCategory }}
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from "vuex";
  import MainHeader from "@/components/MainHeader.vue";

  export default {
    components: {
      MainHeader
    },
    computed: {
      ...mapGetters(["unselectedCategories"]),
      currentCategory() {
        return this.unselectedCategories[0];
      }
    },
    methods: {
      ...mapActions(["sendData", "selectCategory"]),
      dismiss() {
        this.select({ type: "dismiss" });
      },
      accept() {
        this.select({ type: "accept" });
      },
      select({ type }) {
        this.selectCategory({
          type,
          category: this.currentCategory
        });
        if (this.unselectedCategories.length === 0) this.getResults();
      },
      async getResults() {
        await this.sendData();
        this.$router.push("results");
      }
    }
  };
</script>


<style>
  .selection {
    background: linear-gradient(to right bottom, #011863, #0030cc);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .selection > div {
    background: #fff;
    width: 90%;
    color: blue;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    margin-top: 50vh;
    transform: translateY(-50%);
    border-radius: 20px;
    box-sizing: border-box;
  }
</style>
