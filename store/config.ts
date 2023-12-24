import { defineStore } from "pinia";
import API from "@/api";
import type { Config } from "~/types";

export const useConfigStore = defineStore("config", {
  state: () => ({
    configs: [] as Config[],
    isConfigsLoading: true as boolean,
  }),
  actions: {
    async getConfigs(id: string) {
      this.isConfigsLoading = true;
      this.configs = await new API().service.getConfigs(id);
      this.isConfigsLoading = false;
    },
  },
});
