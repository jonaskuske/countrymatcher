<template>
<div class="sel-container">
  <div
    class="sel-card"
    :class="[{'sel-card-fade': animate.do}, {'sel-card-fade-left': animate.do && animate.dir === 'left'}, {'sel-card-fade-right': animate.do&&animate.dir==='right'}]"
    :style="`background-image: url(${image})`"
  >
    <p>{{title | capitalize }}</p>
    <ul>
      <li v-for="(bulletpoint, i) in bulletpoints" :key="i">
        * {{ bulletpoint }} *
      </li>
    </ul>
  </div>

</div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      bulletpoints: {
        type: Array,
        required: false,
        default: () => []
      },
      animate: {
        type: Object,
        required: false,
        default: () => ({})
      }
    }
  };
</script>


<style scoped>
  .sel-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .sel-card {
    min-height: 4rem;
    width: 80%;
    background: url() center / cover no-repeat;
    border-radius: 14px;
    height: 90%;
    display: grid;
    align-items: flex-end;
    grid-template: 1fr 77px 110px / 1fr;
    transition: transform 250ms ease-in-out, opacity 200ms ease-in;
    box-shadow: 0 2px 0 0 #6b6b6b, 0 2px 24px 0 rgba(0, 0, 0, 0.5);
    border-radius: 6px;
  }
  .sel-card-fade {
    opacity: 0;
  }
  .sel-card-fade-right {
    transform: translateX(120%) scale(0.9);
  }
  .sel-card-fade-left {
    transform: translateX(-120%) scale(0.9);
  }
  p {
    font-family: "Kaushan Script";
    font-size: 28px;
    grid-row: 2;
  }
  ul {
    list-style: none;
    grid-row: 3;
    margin-bottom: 27px;
  }
  ul li {
    display: block;
    font-size: 16px;
  }
</style>
