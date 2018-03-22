<template>
  <div class="overlay">
    <h1>Find out where you belong.</h1>
    <p>Tell us if something is hot or not by swiping left and right - once you're done we'll tell you which European countries are perfect for you.</p>
    <main-button class="overlay-btn" @click.native="$store.commit('toggleOverlay')">Got it!</main-button>
  </div>
</template>

<script>
  import MainButton from "@/components/MainButton.vue";

  export default {
    components: { MainButton }
  };
</script>


<style>
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding-top: 2rem;
    display: grid;
    justify-content: center;
  }
  .overlay p,
  .overlay h1 {
    padding: 0 50px;
  }
  .overlay p {
    font-size: 18px;
    font-weight: lighter;
  }
  .overlay > h1 {
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 22px;
    font-weight: normal;
  }
  .overlay-btn {
    margin-left: auto;
    margin-right: auto;
  }
</style>
