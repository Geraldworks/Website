<script>
import Card from "./Card.vue";

class Styler {
  constructor(name) {
    this.enterAnimation = false;
    this.exitAnimation = false;
    this.moveForwardToFirstPosition = false;
    this.moveForwardToSecondPosition = false;
    this.moveBackwardToLastPosition = false;
    this.moveBackwardToSecondPosition = false;
    this.name = name;
  }
}

let educationCard = new Styler("Education");
let softCard = new Styler("Soft");
let interestCard = new Styler("Interest");

export default {
  data() {
    return {
      tracker: 1,
      currHeight: 0,
      educationCard,
      softCard,
      interestCard,
      cardQueue: [educationCard, softCard, interestCard],
    };
  },
  methods: {
    applyForward() {
      // all possible state changes to first component
      this.cardQueue[0].exitAnimation = true;
      this.cardQueue[0].moveForwardToFirstPosition = false;
      this.cardQueue[0].enterAnimation = false;
      // all possible state changes to second component
      this.cardQueue[1].moveForwardToFirstPosition = true;
      this.cardQueue[1].moveForwardToSecondPosition = false;
      this.cardQueue[1].moveBackwardToSecondPosition = false;
      // all possible state changes to third component
      this.cardQueue[2].moveForwardToSecondPosition = true;
      this.cardQueue[2].moveBackwardToLastPosition = false;
      this.cardQueue[2].exitAnimation = false;
    },
    applyBackward() {
      this.cardQueue[0].moveBackwardToSecondPosition = true;
      this.cardQueue[0].moveForwardToFirstPosition = false;
      this.cardQueue[0].enterAnimation = false;

      this.cardQueue[1].moveBackwardToLastPosition = true;
      this.cardQueue[1].moveBackwardToSecondPosition = false;
      this.cardQueue[1].moveForwardToSecondPosition = false;

      this.cardQueue[2].enterAnimation = true;
      this.cardQueue[2].exitAnimation = false;
      this.cardQueue[2].moveBackwardToLastPosition = false;
    },
    showNext() {
      this.tracker = this.tracker === 3 ? 1 : this.tracker + 1;
      this.applyForward();
      this.cardQueue.push(this.cardQueue.shift());
    },
    showPrevious() {
      this.tracker = this.tracker === 1 ? 3 : this.tracker - 1;
      this.applyBackward();
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
    style="position: relative; z-index: 0"
    :style="{ height: currHeight + 'px' }"
    class="d-flex justify-center"
  >
    <Card
      imagePath="src/assets/images/learn.jpg"
      header="Hobbies"
      :class="interestCard"
      class="thirdCard"
      >Interests and some additional text</Card
    >
    <Card
      @cardResized="(newValue) => (currHeight = newValue + 20)"
      imagePath="src/assets/images/talking.jpg"
      header="Personality"
      :class="softCard"
      class="secondCard"
      >Soft skills and some additional text</Card
    >
    <Card
      imagePath="src/assets/images/nus.jpg"
      header="Education"
      :class="educationCard"
      class="firstCard"
      >Education and some additional text</Card
    >
  </div>
  <div class="mb-4 d-flex justify-center align-center">
    <v-btn @click="showPrevious" icon="mdi-arrow-left" class="mr-8"></v-btn>
    <div>
      <v-progress-linear
        style="width: 100px"
        rounded
        :rounded-bar="true"
        :model-value="(tracker / 3) * 100"
      ></v-progress-linear>
    </div>
    <v-btn @click="showNext" class="ml-8" icon="mdi-arrow-right"></v-btn>
  </div>
</template>

<style>
:root {
  --timing: cubic-bezier(0.215, 0.61, 0.355, 1);
}
/*
    this.enterAnimation = false;
    this.moveBackwardToLastPosition = false;
    this.moveBackwardToSecondPosition = false; */

.enterAnimation {
  animation-name: enter;
  animation-duration: 2.3s;
  animation-timing-function: var(--timing);
  animation-fill-mode: forwards;
}

@keyframes enter {
  0% {
    top: -30px;
    transform: translateX(30px);
    opacity: 0.25;
    z-index: 0;
  }
  50% {
    top: 0px;
    transform: translateX(50px);
  }

  100% {
    top: 0px;
    transform: none;
    opacity: 1;
    z-index: 2;
  }
}

.moveBackwardToLastPosition {
  animation-name: moveBackwardToLast;
  animation-duration: 2.3s;
  animation-timing-function: var(--timing);
  animation-fill-mode: forwards;
}

@keyframes moveBackwardToLast {
  from {
    top: -15px;
    transform: translateX(15px);
    opacity: 0.5;
    z-index: 1;
  }
  to {
    transform: translateX(30px);
    opacity: 0.255;
    z-index: 0;
    top: -30px;
  }
}

.moveBackwardToSecondPosition {
  animation-name: moveBackwardToSecond;
  animation-duration: 2.3s;
  animation-timing-function: var(--timing);
  animation-fill-mode: forwards;
}

@keyframes moveBackwardToSecond {
  from {
    top: 0px;
    transform: none;
    opacity: 1;
    z-index: 2;
  }
  to {
    transform: translateX(15px);
    opacity: 0.5;
    z-index: 1;
    top: -15px;
  }
}

.moveForwardToSecondPosition {
  animation-name: moveForwardToSecond;
  animation-duration: 2.3s;
  animation-timing-function: var(--timing);
  animation-fill-mode: forwards;
}

@keyframes moveForwardToSecond {
  from {
    top: -30px;
    transform: translateX(30px);
    opacity: 0.25;
    z-index: 0;
  }
  to {
    transform: translateX(15px);
    opacity: 0.5;
    z-index: 1;
    top: -15px;
  }
}

.moveForwardToFirstPosition {
  animation-name: moveForwardToFirst;
  animation-duration: 2.3s;
  animation-timing-function: var(--timing);
  animation-fill-mode: forwards;
}

@keyframes moveForwardToFirst {
  from {
    top: -15px;
    transform: translateX(15px);
    opacity: 0.5;
    z-index: 1;
  }
  to {
    transform: none;
    opacity: 1;
    z-index: 2;
    top: 0px;
  }
}

.exitAnimation {
  animation-name: exit;
  animation-duration: 2.3s;
  animation-timing-function: var(--timing);
  animation-fill-mode: forwards;
}

@keyframes exit {
  0% {
    top: 0px;
    transform: translateX(0px);
  }
  50% {
    top: 0px;
    transform: translateX(50px);
  }

  100% {
    top: -30px;
    transform: translateX(30px);
    opacity: 0.25;
    z-index: 0;
  }
}
/* the bigger the number, the more forward it becomes */

.secondCard {
  top: -15px;
  opacity: 0.5;
  transform: translateX(15px);
}

.thirdCard {
  overflow: auto;
  top: -30px;
  opacity: 0.25;
  transform: translateX(30px);
}
</style>
