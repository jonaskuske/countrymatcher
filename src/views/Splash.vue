<template>
<div class="view splash">
  <img src="@/assets/logo-countrymatcher3.svg" alt="EU Flagge">
  <div class="splash-textarea">
    <h1>Find out where you belong.</h1>
    <p>Tell us what is hot and what is not...
    <br>and we will find your match!</p>
  </div>
    <main-button class="btn" @click.native="next">Find my Country!</main-button>
</div>
</template>

<script>
  import MainButton from "@/components/MainButton.vue";

  export default {
    components: {
      MainButton
    },
    methods: {
      next() {
        this.$router.push("/tutorial");
      }
    }
  };
</script>

<style>
  .splash {
    background: linear-gradient(to bottom, #0030df, #002098);
    display: grid;
    justify-items: center;
    grid-template: 77.5px 200px 1fr / 1fr;
  }
  .splash img {
    margin: 0;
    padding: 0;
    width: 199.5px;
    grid-row: 2;
  }
  .splash > div {
    grid-row: 3;
  }
  h1 {
    font-weight: normal;
    font-size: 22px;
  }
  .splash-textarea h1 {
    margin: 0;
    margin-top: 67px;
    grid-row: 3;
    padding: 0;
  }
  .splash-textarea p {
    margin-top: 1rem;
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
  }
  .btn {
    position: absolute;
    bottom: 90px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>
