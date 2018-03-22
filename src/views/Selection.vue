<template>
  <div class="view selection">
    <template v-if="unselectedCategories.length">
      <header>
        <button @click="$router.push('/tutorial')" class="btn-back"></button>
        <button @click="openOverlay" class="btn-help">?</button>
        <p>{{ currentCategoryNumber }} / {{ numberOfCategories }}</p>
      </header>
      <selection-card
        v-touch:swipe.left="dismiss"
        v-touch:swipe.right="accept"
        :title="currentCategory"
        :image="currentImage ? currentImage : testImg"
        :bulletpoints="currentBulletpoints"
        :animate="{do: animateCard, dir: animateDir}"
      />
      <div class="btn-container">
        <button class="btn-react btn-dismiss" @click="dismiss" />
        <button class="btn-react btn-accept" @click="accept" />
      </div>
    </template>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
  import testImg from "@/assets/img-innovation.jpg";
  import SelectionCard from "@/components/SelectionCard.vue";
  import { mapActions, mapGetters, mapState } from "vuex";

  export default {
    components: { SelectionCard },
    data() {
      return { testImg, animateCard: false, animateDir: "left" };
    },
    computed: {
      ...mapGetters(["unselectedCategories"]),
      ...mapState(["userSelection"]),
      currentCategory() {
        return this.unselectedCategories[0];
      },
      currentTitle() {
        return this.userSelection[this.currentCategory].title;
      },
      currentImage() {
        return this.userSelection[this.currentCategory].image;
      },
      currentBulletpoints() {
        return this.userSelection[this.currentCategory].bulletpoints
          .split("\r\n")
          .filter(([val]) => !!val);
      },
      numberOfCategories() {
        return Object.values(this.userSelection).length;
      },
      currentCategoryNumber() {
        return this.numberOfCategories - this.unselectedCategories.length + 1;
      }
    },
    methods: {
      ...mapActions(["sendData", "selectCategory"]),
      openOverlay() {
        this.$store.commit("toggleOverlay");
      },
      dismiss() {
        this.select({ type: "dismiss" });
      },
      accept() {
        this.select({ type: "accept" });
      },
      select({ type }) {
        this.animateCard = true;
        this.animateDir = type === "dismiss" ? "left" : "right";
        setTimeout(() => {
          this.selectCategory({ type, category: this.currentCategory });
          this.animateCard = false;
          if (this.unselectedCategories.length === 0) this.getResults();
        }, 300);
      },
      async getResults() {
        await this.sendData();
        this.$router.push("results");
      }
    }
  };
</script>


<style>
  .selection {
    background: linear-gradient(to bottom, #0030df, #002098);
    display: grid;
    height: 100%;
    grid-template: 100px 1fr 70px 38px / 1fr;
    justify-items: center;
  }
  header {
    width: 100%;
    display: grid;
    grid-template: 50px 50px / 1fr;
  }
  header > button {
    width: 25px;
    height: 25px;
    margin: 10px;
    margin-top: 20px;
    color: #fff;
    background: none;
    border: none;
    grid-row: 1;
    grid-column: 1;
  }
  .btn-help {
    background: url(~@/assets/icn-info.svg) center / contain no-repeat;
    justify-self: flex-end;
  }
  .btn-back {
    background: url(~@/assets/icn-back.svg) center / contain no-repeat;
    justify-self: flex-start;
  }
  header > p {
    height: 50px;
  }
  .btn-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .btn-react {
    display: block;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background: none;
  }
  .btn-dismiss {
    background: url(~@/assets/icn-dontcare.svg) center / contain no-repeat;
  }
  .btn-accept {
    background: url(~@/assets/icn-want.svg) center / contain no-repeat;
  }
  .is-touched {
    transform: scale(0.95);
  }
</style>
