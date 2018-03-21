<template>
<div class="view splash" @click="next">
  <img src="@/assets/eu-flag.svg" alt="EU Flagge">
  <h1>Welcome to Countrymatcher</h1>
  <p>touch anywhere to continue</p>
</div>
</template>

<script>
  export default {
    methods: {
      next() {
        this.$router.push("/tutorial");
      }
    }
  };
</script>

<style>
  .splash {
    background: linear-gradient(to right bottom, #011863, #0030cc);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .splash h1 {
    width: 100%;
  }
  img {
    margin: 0;
    padding: 0;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
</style>
