<template>
  <div class="pa-6" v-if="!isUserLoading">
    <RegisterForm v-if="!user" @create="createUser" />
    <div v-else>
      <h1>Welcome {{ user?.id }}</h1>

      <div v-if="configs">
        <div v-for="(config, idx) in configs" :key="idx">{{ config.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { RegisterForm } from "@/components/molecules";
import { mapState, mapActions } from "pinia";
import { useConfigStore, useUserStore } from "@/store";

export default {
  components: {
    RegisterForm,
  },
  data() {
    return {
      projects: null,
      selectedProject: null,
      boards: null,
      selectedBoard: null,
      sprints: null,
      selectedSprint: null,
    };
  },

  async created() {
    // identify current user based on your system
    await this.getUser(import.meta.env.VITE_ACTIVE_USER);

    await this.getConfigs(import.meta.env.VITE_ACTIVE_USER);
  },

  computed: {
    ...mapState(useUserStore, ["user", "isUserLoading"]),
    ...mapState(useConfigStore, ["configs", "isConfigsLoading"]),
  },

  methods: {
    ...mapActions(useUserStore, ["getUser", "createUser"]),
    ...mapActions(useConfigStore, ["getConfigs"]),
  },
};
</script>
