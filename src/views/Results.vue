<template>
  <div class="view results">
    <h1>Your Dreamcountry is...</h1>
    <p class="top-result">{{ result }}</p>
    <section>
      <h3 v-if="otherResults.length">Weitere</h3>
      <p v-for="(other, i) in otherResults">{{ other }}</p>
    </section>
    <button @click="reset">Zurück zum Start</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {
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
    background: linear-gradient(to right bottom, #011863, #0030cc);
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
    color: blue;
    background: #fff;
    border: none;
    outline: none;
    height: 2rem;
    padding: 0.5rem;
  }
  .top-result {
    font-weight: 600;
    font-size: 2.5rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
</style>
