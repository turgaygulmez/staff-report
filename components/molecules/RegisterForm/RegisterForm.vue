<template>
  <v-sheet max-width="500" class="mx-auto">
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="formData.jiraDomain"
        :rules="[ruleRequired]"
        label="Jira Domain"
      />
      <v-text-field
        v-model="formData.jiraUserName"
        :rules="[ruleRequired]"
        label="Jira Username (email)"
      />
      <v-text-field
        v-model="formData.jiraToken"
        :rules="[ruleRequired]"
        label="Jira Token"
      />

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        jiraDomain: null,
        jiraUserName: null,
        jiraToken: null,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("create", this.formData);
    },
    ruleRequired(value) {
      return !!value || "It is required";
    },
  },
};
</script>
