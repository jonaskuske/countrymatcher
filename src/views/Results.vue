<template>
  <div class="view results">
    <h1>Your Dreamcountry could be...</h1>
    <p class="top-result">{{ result }}</p>
    <section>
      <h3 v-if="otherResults.length">Weitere</h3>
      <p v-for="(other, i) in otherResults">{{ other }}</p>
    </section>
    <main-button @click.native="reset">Zurück zum Start</main-button>
  </div>
</template>

<script>
  import MainButton from "@/components/MainButton.vue";
  import { mapState, mapActions } from "vuex";

  export default {
    components: {
      MainButton
    },
    mounted() {
      this.$confetti.start();
      setTimeout(() => this.$confetti.stop(), 500);
    },
    computed: {
      ...mapState(["result", "otherResults"])
    },
    methods: {
      ...mapActions(["resetUserSelection"]),
      reset() {
        this.resetUserSelection();
        this.$router.push("/");
      }
    }
  };
</script>

<style scoped>
  .results {
    background: linear-gradient(to bottom, #0030df, #002098);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .results > h1,
  .results > p,
  .results > section {
    width: 100%;
  }
  h1 {
    margin: 6rem 0 2rem 0;
  }
  button {
    height: 2rem;
    padding: 0.5rem;
    font-weight: normal;
  }
  .top-result {
    font-weight: 600;
    font-size: 2.5rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 27px;
    font-weight: normal;
  }
</style>
