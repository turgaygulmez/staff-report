<template>
  <a-layout has-sider>
    <a-layout-sider
      width="250"
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }"
    >
      <a-menu theme="dark" mode="inline">
        <a-menu-item
          v-for="(navItem, navItemIdx) in navItems"
          :key="navItemIdx"
        >
          <component :is="navItem.icon" />
          <span class="nav-text">{{ navItem.label }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout :style="{ marginLeft: '250px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 48px 0', overflow: 'initial' }">
        <DynamicForm
          v-if="forms"
          :schema="forms['register']"
          @submit="registerUser"
        />
      </a-layout-content>
    </a-layout>

    <a-layout-footer
      :style="{
        overflow: 'auto',
        width: '100vw',
        position: 'fixed',
        bottom: 0,
      }"
    >
      Staff Report
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { DynamicForm } from "@/components/molecules";
import { mapState, mapActions } from "pinia";
import { useConfigStore, useUserStore, useFormStore } from "@/store";
import {
  HomeOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

export default {
  components: {
    DynamicForm,
    HomeOutlined,
    TeamOutlined,
    SettingOutlined,
  },
  data() {
    return {
      projects: null,
      selectedProject: null,
      boards: null,
      selectedBoard: null,
      sprints: null,
      selectedSprint: null,
      navItems: [
        {
          icon: "home-outlined",
          label: "Home",
        },
        {
          icon: "team-outlined",
          label: "Teams",
        },
        {
          icon: "setting-outlined",
          label: "Configs",
        },
      ],
    };
  },

  async created() {
    // identify current user based on your system
    await this.getUser(import.meta.env.VITE_ACTIVE_USER);

    await this.getConfigs(import.meta.env.VITE_ACTIVE_USER);

    await this.getForm("register");
  },

  computed: {
    ...mapState(useUserStore, ["user", "isUserLoading"]),
    ...mapState(useConfigStore, ["configs", "isConfigsLoading"]),
    ...mapState(useFormStore, ["forms", "isFormsLoading"]),
  },

  methods: {
    ...mapActions(useUserStore, ["getUser", "registerUser"]),
    ...mapActions(useConfigStore, ["getConfigs"]),
    ...mapActions(useFormStore, ["getForm"]),

    addNewConfig() {
      console.log("adding");
    },
  },
};
</script>
