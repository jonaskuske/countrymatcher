<template>
  <header>
    <back-button :to="backTo" />
    <p>{{title}}</p>
    <div />
  </header>
</template>

<script>
  import BackButton from "./BackButton.vue";

  export default {
    components: {
      BackButton
    },
    props: {
      backTo: {
        required: true,
        type: String
      },
      title: {
        required: false,
        type: String
      }
    }
  };
</script>

<style scoped>
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
  div {
    width: 2rem;
  }
</style>
