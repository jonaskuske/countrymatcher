<template>
  <button><slot /></button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: false
      }
    }
  };
</script>


<style scoped>
  button {
    margin-top: 6rem;
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    color: #fff;
    width: 220px;
    height: 47px;
    font-size: 16px;
    font-weight: 300;
  }
  button:hover,
  button:active {
    border: 1px solid #ffd300;
    color: #ffd300;
    outline: none;
  }
</style>
