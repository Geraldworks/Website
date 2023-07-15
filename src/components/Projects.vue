<script>
import DesktopProjects from "./DesktopProjects.vue";
import MobileProjects from "./MobileProjects.vue";
export default {
  components: {
    DesktopProjects,
    MobileProjects,
  },
};
</script>

<template>
  <span id="projects"></span>
  <div class="text-h5 text-center font-weight-bold mt-4">
    My Projects
    <p class="text-subtitle-2 mb-4">Practising Tech and Skillsets</p>
  </div>
  <DesktopProjects v-show="$vuetify.display.width >= 650" />
  <MobileProjects v-show="$vuetify.display.width < 650" />
</template>
