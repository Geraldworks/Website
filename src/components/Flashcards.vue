<script>
import Card from "./Card.vue";

class Styler {
  constructor(name) {
    this.enterAnimation = false;
    this.exitAnimation = false;
    this.moveCloserAnimation = false;
    this.moveFurtherAnimation = false;
    this.name = name;
  }
}

let educationCard = new Styler("Education");
let softCard = new Styler("Soft");
let interestCard = new Styler("Interest");

export default {
  data() {
    return {
      currHeight: 0,
      educationCard,
      softCard,
      interestCard,
      cardQueue: [educationCard, softCard, interestCard],
    };
  },
  methods: {
    rotateForwardAndApply() {
      this.cardQueue.forEach((obj) => {
        obj.enterAnimation = !obj.enterAnimation;
        obj.exitAnimation = !obj.exitAnimation;
      });
    },
    rotateBackwardAndApply() {
      this.cardQueue.forEach((obj) => {
        obj.enterAnimation = !obj.enterAnimation;
        obj.exitAnimation = !obj.exitAnimation;
      });
    },
    showNext() {
      this.rotateForwardAndApply();
      this.cardQueue.push(this.cardQueue.shift());
    },
    showPrevious() {
      this.rotateBackwardAndApply();
      this.cardQueue.unshift(this.cardQueue.pop());
    },
  },
  watch: {
    height(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },

  components: {
    Card,
  },
};
</script>

<template>
  <div
    style="position: relative"
    :style="{ height: currHeight + 'px' }"
    class="d-flex justify-center"
  >
    <Card
      id="that"
      @cardResized="(newValue) => (currHeight = newValue + 20)"
      imagePath="src/assets/images/talking.jpg"
      >Soft skills and some additional text</Card
    >
    <Card imagePath="src/assets/images/nus.jpg"
      >Education and some additional text</Card
    >
  </div>
  <div class="mb-4 d-flex justify-center">
    <v-btn @click="showNext" icon="mdi-arrow-left" class="mr-8"></v-btn>
    <v-btn @click="showPrevious" icon="mdi-arrow-right"></v-btn>
  </div>
</template>

<style>
.enterAnimation {
  background-color: red;
  color: blue;
  animation-name: test;
  animation-duration: 5s;
}

.exitAnimation {
  background-color: blue;
}

@keyframes test {
  0% {
    top: 500px;
    background-color: red;
  }
  100% {
    background-color: blue;
    top: -100px;
    opacity: 0;
    z-index: 2;
  }
}

#that {
  color: red;
}
</style>
