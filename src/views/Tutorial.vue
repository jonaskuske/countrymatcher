<template>
  <div class="view tutorial" @click="next">
    <main-header :back-to="'/'" :title="'Tutorial'" />
    <p>Tell us if something is hot or not by swiping left and right - once you're done we'll tell you which European countries are perfect for you.</p>
    <p class="nav-hint" :class="{invisible: !navHintVisible}">touch anywhere to continue</p>
  </div>
</template>

<script>
  import MainHeader from "@/components/MainHeader.vue";

  export default {
    components: {
      MainHeader
    },
    created() {
      setTimeout(() => (this.navHintVisible = true), 1100);
    },
    data() {
      return {
        navHintVisible: false
      };
    },
    methods: {
      next() {
        this.$router.push("/selection");
      }
    }
  };
</script>


<style>
  .tutorial {
    background: linear-gradient(to right bottom, #011863, #0030cc);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .tutorial h1 {
    width: 100%;
  }
  .tutorial > p {
    width: 70%;
  }
  .nav-hint {
    width: 100%;
    transition: opacity 200ms ease-out;
  }
  .invisible {
    opacity: 0;
  }
</style>
