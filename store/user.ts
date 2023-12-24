import { defineStore } from "pinia";
import type { User } from "~/types";
import API from "@/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as User,
    isUserLoading: true as boolean,
  }),
  actions: {
    async getUser(id: string) {
      this.isUserLoading = true;
      this.user = await new API().service.getUser(id);
      this.isUserLoading = false;
    },
    async createUser(payload: User) {
      this.isUserLoading = true;
      this.user = await new API().service.createUser(payload);
      this.isUserLoading = false;
    },
  },
});
