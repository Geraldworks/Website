<script>
export default {
  data() {
    return {
      showProgramming: false,
      showSoftware: false,
      showData: false,
      showML: false,
      programming: ["Python", "Javascript", "Java", "C#"],
      analysis: ['SQL', 'Power BI', 'Tableau', 'RStudio', '']
    };
  },
};
</script>

<template>
  <div class="text-h5 text-center font-weight-bold mt-16">
    Skills
    <p class="text-subtitle-2">Proficiencies and Abilities</p>
  </div>
  <v-container class="mx-auto mt-3">
    <v-row
      class="d-flex flex-wrap justify-center px-auto mx-auto"
      style="max-width: 1100px"
    >
      <v-col cols="5" class="card-width mr-3">
        <v-card class="mx-auto" elevation="5">
          <v-img
            height="200"
            src="src/assets/images/programming.jpg"
            cover
          ></v-img>
          <v-card-title class="font-weight-bold">Programming</v-card-title>
          <v-card-subtitle>Languages and Algorithms</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :icon="showProgramming ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showProgramming = !showProgramming"
            ></v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="showProgramming">
              <v-divider></v-divider>

              <v-card-text>
                <v-list density="compact" lines="1">
                  <v-list-item
                    v-for="lang in programming"
                    :title="lang"
                    variant="text"
                  >
                    <template v-slot:prepend
                      ><v-icon
                        icon="mdi-check-circle-outline"
                        color="success"
                      ></v-icon
                    ></template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="5" class="card-width">
        <v-card class="mx-auto" elevation="5">
          <v-img height="200" src="src/assets/images/backend.jpg" cover></v-img>
          <v-card-title class="font-weight-bold"
            >Backend Development</v-card-title
          >
          <v-card-subtitle>Frameworks</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :icon="showSoftware ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showSoftware = !showSoftware"
            ></v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="showSoftware">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="d-flex flex-wrap justify-center px-auto mx-auto pt-3"
      style="max-width: 1100px"
    >
      <v-col cols="5" class="card-width mr-3">
        <v-card class="mx-auto" elevation="5">
          <v-img height="200" src="src/assets/images/visual.jpg" cover></v-img>
          <v-card-title class="font-weight-bold"
            >Data Analysis & Visualisation</v-card-title
          >
          <v-card-subtitle>Descriptive Analytics</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :icon="showData ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showData = !showData"
            ></v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="showData">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="5" class="card-width">
        <v-card class="mx-auto" elevation="5">
          <v-img height="200" src="src/assets/images/ml.jpg" cover></v-img>
          <v-card-title class="font-weight-bold">Machine Learning</v-card-title>
          <v-card-subtitle>Predictive Analytics</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :icon="showML ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showML = !showML"
            ></v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="showML">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.card-width {
  min-width: 350px;
  max-width: 450px;
}
</style>
