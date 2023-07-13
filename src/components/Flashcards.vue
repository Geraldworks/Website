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
      imagePath="/images/learn.jpg"
      header="Hobbies"
      :class="interestCard"
      class="thirdCard"
      icon="mdi-lightbulb-on"
      :func="null"
      >I enjoy playing video games whenever time permits! My favourite games are
      Elden Ring and Octopath Traveler. I also enjoy learning new tech and
      skills. Recently, reinforcement learning caught my attention, and I have,
      on occasions, experimented with it through games in Unity.
    </Card>
    <Card
      imagePath="/images/talking.jpg"
      header="Personality"
      :class="softCard"
      class="secondCard"
      icon="mdi-heart"
      :func="null"
    >
      I am a jovial person and I like to crack jokes to lift the mood. I am
      organised and ambitious when it comes to my work, aiming to complete my
      tasks to the best of my abilities. If required, I am confident that I can
      assist my peers and guide them in the right direction whenever they are
      troubled.
    </Card>
    <Card
      imagePath="/images/nus.jpg"
      header="Education"
      :class="educationCard"
      class="firstCard"
      icon="mdi-school"
      buttonIcon="mdi-tray-arrow-down"
      buttonText="TBC"
      @cardResized="(newValue) => (currHeight = newValue + 20)"
      >I am an undergraduate majoring in Business Analytics. It involves
      learning descriptive, predictive and prescriptive analytics, while also
      gaining theoretical and hands-on experience with software development and
      machine learning.
    </Card>
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
  --time: 2s;
  --timing: cubic-bezier(0.19, 1, 0.22, 1);
}

.enterAnimation {
  animation-name: enter;
  animation-duration: var(--time);
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
  animation-duration: var(--time);
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
  animation-duration: var(--time);
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
  animation-duration: var(--time);
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
  animation-duration: var(--time);
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
  animation-duration: var(--time);
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
