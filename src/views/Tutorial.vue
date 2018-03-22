<template>
  <div class="view tutorial">
    <h1>Find out where you belong.</h1>
    <p>Tell us if something is hot or not by swiping left and right - once you're done we'll tell you which European countries are perfect for you.</p>
    <main-button class="btn" @click.native="next">Let's go!</main-button>
  </div>
</template>

<script>
  import MainButton from "@/components/MainButton.vue";

  export default {
    components: { MainButton },
    methods: {
      next() {
        this.$router.push("/selection");
      }
    }
  };
</script>


<style>
  .tutorial {
    background: linear-gradient(to bottom, #0030df, #002098);
    display: grid;
    justify-items: center;
    grid-template: 120px 200px 1fr / 1fr;
  }
  .tutorial h1 {
    padding: 0 44px;
    padding-top: 99px;
    text-align: left;
    box-sizing: border-box;
    width: 100%;
    grid-row: 1;
  }
  .tutorial > p {
    text-align: left;
    margin-top: 30px;
    width: 100%;
    padding: 0 44px;
    box-sizing: border-box;
    grid-row: 2;
    font-size: 18px;
    font-weight: lighter;
  }
</style>
