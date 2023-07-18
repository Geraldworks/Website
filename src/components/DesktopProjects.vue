<script>
import TimelineItem from "./TimelineItem.vue";
import projectInfo from "./projectInfo"

export default {
  data() {
    return {
      ...projectInfo
    };
  },
  components: {
    TimelineItem,
  },
};
</script>

<template>
  <v-timeline justify-center class="mb-4">
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
        target="_blank"
        >BT3103</a
      >
      curriculum which inculcates agile development (scrum) throughout the
      project.
    </TimelineItem>
    <TimelineItem v-bind="resumeProcessor"
      >Finding a job can be very challenging and more often than we realise, our
      resumes could be a poor fit for the jobs! Leveraging on the technique
      learnt in
      <a
        href="https://nusmods.com/courses/BT4222/mining-web-data-for-business-insights"
        target="_blank"
        >BT4222</a
      >, this project uses various machine learning methods from a web scrapped
      dataset to train a model that predicts the job category of a resume. This
      gives end users a good idea if their resume is a good fit for a job.
    </TimelineItem>
    <TimelineItem v-bind="hmm"
      >Part of Speech (POS) Tagging is a common data preprocessing step for
      Natural Language Processing.
      <a
        href="https://nusmods.com/courses/BT3102/computational-methods-for-business-analytics"
        target="_blank"
        >BT3102</a
      >
      introduces Hidden Markov Models, which has a similar architecture to POS
      tagging. In this project, we were required to build a POS Tagger from
      scratch using a twitter dataset. The Viterbi Algorithm and Maximum
      Likelihood Estimation were used in this project.
    </TimelineItem>
    <TimelineItem v-bind="analysis"
      >Using the skills learnt from
      <a
        href="https://nusmods.com/archive/BT2103/2022-2023/optimization-methods-in-business-analytics"
        target="_blank"
        >BT2103</a
      >, this project aims to give students hands-on experience with descriptive
      and predictive analytics. Using the "Default of Credit Card Clients"
      dataset, we performed data exploration, cleaning and evaluation of five
      different models to determine the best model that can be used to predict
      if a client would default on their credit card.
    </TimelineItem>
    <TimelineItem v-bind="orbital">
      RobotInvazion is a simple tower defense games built in Unity with C#. This
      project is part of the
      <a href="https://orbital.comp.nus.edu.sg/" target="_blank">Orbital</a>
      programme that gives students the opportunity to pick up software
      development skills on their own.
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
