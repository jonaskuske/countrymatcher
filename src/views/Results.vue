<template>
  <div class="view results">
        <h1>Hooray, it's {{ result }}!</h1>
        <div style="width: 100%;">
          <img :src="currentImg" />
        </div>
        <div style="width: 100%;">
        <img src="@/assets/infographic.svg" />
        </div>
        <main-button @click.native="reset">Try again!</main-button>
        <div class="social-container">
          <div class="social-divider"  />
          <h2>Sharing is caring!</h2>
          <p>Share your love for countrymatcher</p>
          <div class="social-icn-container">
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://countrymatcher.jonaskuske.com" target="_blank" rel="noopener"><img src="@/assets/icn-share-facebook.svg"></a>
          <a href="whatsapp://send?text=http://countrymatcher.jonaskuske.com"><img src="@/assets/icn-share-whatsapp.svg"></a>
          <a href="https://twitter.com/share?url=http://countrymatcher.jonaskuske.com&text=Find%20your%20dreamcountry!" target="_blank" rel="noopener"><img src="@/assets/icn-share-twitter.svg"></a>
          </div>
      </div>
  </div>
</template>

<script>
  import italyMap from "@/assets/resultmap-italy.svg";
  import greeceMap from "@/assets/resultmap-greece.svg";
  import irelandMap from "@/assets/resultmap-ireland.svg";
  import fallbackMap from "@/assets/resultmap-fallback.svg";
  import MainButton from "@/components/MainButton.vue";
  import { mapState, mapActions } from "vuex";

  export default {
    components: { MainButton },
    mounted() {
      this.$confetti.start();
      setTimeout(() => this.$confetti.stop(), 500);
    },
    computed: {
      ...mapState(["result", "otherResults"]),
      currentImg() {
        switch (this.result) {
          case "Italy":
            return italyMap;
          case "Greece":
            return greeceMap;
          case "Ireland":
            return irelandMap;
          default:
            return fallbackMap;
        }
      }
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
  .social-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .social-container h2,
  .social-container p {
    width: 100%;
    font-weight: normal;
  }
  .social-container h2 {
    margin-top: 0.8rem;
  }
  .social-container p {
    font-weight: lighter;
    margin-bottom: 0.3rem;
  }
  .social-divider {
    width: 90%;
    border-bottom: 1px solid #fff;
  }
  .social-icn-container {
    display: flex;
    justify-content: space-between;
    max-width: 230px;
    width: 100%;
    margin-bottom: 0.5rem;
  }
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
  .results button {
    margin-top: 1rem;
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
