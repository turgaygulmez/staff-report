<template>
  <div class="p-8">
    <v-text-field v-model="jiraDomain" label="domain" />
    <v-text-field v-model="jiraUserName" label="username" />
    <v-text-field v-model="jiraToken" label="token" />

    <v-btn @click="createUser"> Create user </v-btn>
  </div>
</template>

<script>
import API from "@/api";

export default {
  data() {
    return {
      projects: null,
      selectedProject: null,
      boards: null,
      selectedBoard: null,
      sprints: null,
      selectedSprint: null,
      jiraDomain: null,
      jiraUserName: null,
      jiraToken: null,
    };
  },

  async created() {
    // get user
  },

  computed: {},

  methods: {
    createUser() {
      API.service.createUser({
        jiraDomain: this.jiraDomain,
        jiraUserName: this.jiraUserName,
        jiraToken: this.jiraToken,
      });
    },
  },
};
</script>
