<template>
<div>
  <fullscreen-overlay v-if="overlayOpen" />
  <router-view/>
</div>
</template>

<script>
  import { mapState } from "vuex";
  import FullscreenOverlay from "./views/Overlay.vue";

  export default {
    components: {
      FullscreenOverlay
    },
    computed: {
      ...mapState(["overlayOpen"])
    }
  };
</script>


<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400");
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    color: #fff;
    text-align: center;
  }
  html,
  button {
    font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-stretch: condensed;
  }
  .view {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
  }
</style>
