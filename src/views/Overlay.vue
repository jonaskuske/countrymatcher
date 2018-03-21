<template>
  <div class="overlay">
    <h1>Find out where you belong.</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <main-button class="mb-btn" @click.native="$store.commit('toggleOverlay')">Got it!</main-button>
  </div>
</template>

<script>
  import MainButton from "@/components/MainButton.vue";

  export default {
    components: {
      MainButton
    }
  };
</script>


<style>
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding-top: 2rem;
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
  .mb-btn {
    transform: translateX(-50%);
    margin-left: 50%;
  }
</style>
