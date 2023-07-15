<script>
import TimelineItem from "./TimelineItem.vue";
import { useDisplay } from "vuetify";

export default {
  data() {
    return {
      website: {
        srcImg: "/images/website_light.png",
        projectTitle: "Personal Website",
        projectDuration: "June 2023 - July 2023",
        githubLink: "https://github.com/Geraldworks/Website",
        techStack: ["Vue"],
        // personal
      },
      gymmbuddy: {
        srcImg: "/images/gymmbuddy.png",
        projectTitle: "GymmBuddy",
        projectDuration: "Jan 2023 - Apr 2023",
        projectLink: "https://gymmbuddy-3e930.web.app/",
        githubLink: "https://github.com/Geraldworks/BT3103",
        techStack: ["Vue", "Firestore"],
        // bt3103
      },
      resumeProcessor: {
        srcImg: "/images/learn.jpg",
        projectTitle: "Fit for the Job?",
        projectDuration: "Jan 2023 - Apr 2023",
        techStack: ["Vue", "Firestore"],
        // bt4222
      },
      hmm: {
        srcImg: "/images/learn.jpg",
        projectTitle: "Hidden Markov Models",
        projectDuration: "Jan 2023 - Apr 2023",
        techStack: [],
        // bt3102
      },
      analysis: {
        srcImg: "/images/credit.jpg",
        projectTitle: "Credit Defaulter",
        projectDuration: "Jan 2023 - Apr 2023",
        projectLink:
          "https://www.kaggle.com/datasets/uciml/default-of-credit-card-clients-dataset",
        githubLink: "https://github.com/Geraldworks/BT2103",
        techStack: ["Pandas", "Seaborn", "scikit-learn", "Tensorflow 2"],
        // bt2103
      },
      orbital: {
        srcImg: "/images/robot.png",
        projectTitle: "RobotInvazion",
        projectDuration: "May 2022 - Aug 2022",
        projectLink: "https://www.youtube.com/watch?v=A3uXztc71QU",
        githubLink: "https://github.com/Geraldworks/RobotInvazion",
        techStack: ["C#", "Unity"],
        // orbital
      },
      database: {
        srcImg: "/images/library.jpeg",
        projectTitle: "Library System",
        projectDuration: "Jan 2022 - Apr 2022",
        githubLink: "https://github.com/Geraldworks/BT2102",
        techStack: ["MySQL", "tkinter"],
        // bt2102
      },
    };
  },
  components: {
    TimelineItem,
  },
};
</script>

<template>
  <v-timeline density="default" justify-center class="mb-4">
    <TimelineItem v-bind="website">
      A simple website to share information about myself and keep track of my
      skillsets and projects.
    </TimelineItem>
    <TimelineItem v-bind="gymmbuddy"
      >GymmBuddy is an interactive fitness management application for both
      trainers and clients. Clients can create accounts to monitor their fitness
      progress, make personal trainer bookings and configure their fitness
      routines. Trainers on the other hand will be able to manage clients and
      their bookings. This project is part of the
      <a
        href="https://nusmods.com/courses/BT3103/application-systems-development-for-business-analytics"
        >BT3103</a
      >
      curriculum which inculcates agile development (scrum) throughout the
      project.
    </TimelineItem>
    <TimelineItem v-bind="resumeProcessor"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
      debitis excepturi odio ea ipsum illo nobis eos, deleniti enim quae.
    </TimelineItem>
    <TimelineItem v-bind="hmm"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
      debitis excepturi odio ea ipsum illo nobis eos, deleniti enim quae.
    </TimelineItem>
    <TimelineItem v-bind="analysis"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
      debitis excepturi odio ea ipsum illo nobis eos, deleniti enim quae.
    </TimelineItem>
    <TimelineItem v-bind="orbital">
      RobotInvazion is a simple tower defense games built in Unity with C#. This
      project is part of the
      <a href="https://orbital.comp.nus.edu.sg/">Orbital</a> programme that
      gives students the opportunity to pick up software development skills on
      their own.
    </TimelineItem>
    <TimelineItem v-bind="database"
      >As part of our
      <a
        href="https://nusmods.com/courses/BT2102/data-management-and-visualisation"
        target="_blank"
        >BT2102</a
      >
      assignment, we were tasked to implement a library management system to
      handle the borrowing, returning and reservation of books, along with
      overdue fines associated with them. MySQL was used as the database for the
      application.
    </TimelineItem>
  </v-timeline>
</template>
