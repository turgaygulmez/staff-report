import { defineStore } from "pinia";
import API from "@/api";

export const useFormStore = defineStore("form", {
  state: () => ({
    forms: {} as { [key: string]: any },
    isFormsLoading: true as boolean,
  }),
  actions: {
    async getForm(schema: string) {
      this.isFormsLoading = true;

      const data = await new API().service.getForm(schema);
      this.forms[schema] = data?.schema;

      this.isFormsLoading = false;
    },
  },
});
