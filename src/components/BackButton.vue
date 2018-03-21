<template>
  <button @click="goBack" />
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    methods: {
      goBack(e) {
        e.stopPropagation();
        this.$router.push(this.to);
      }
    }
  };
</script>

<style scoped>
  button {
    background: url(~@/assets/arrow_back.svg) center / contain no-repeat;
    outline: none;
    border: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
</style>
