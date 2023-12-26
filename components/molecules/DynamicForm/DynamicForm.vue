<template>
  <FormProvider :form="form">
    <a-form layout="vertical">
      <SchemaField :schema="schema" />

      <FormConsumer>
        <template #default="{ form }">
          <a-button type="primary" @click="form.submit(submitHandler)">
            Submit
          </a-button>
        </template>
      </FormConsumer>
    </a-form>
  </FormProvider>
</template>

<script>
import { Form, Input } from "ant-design-vue";
import { createForm, setValidateLanguage } from "@formily/core";
import {
  FormProvider,
  FormConsumer,
  connect,
  mapProps,
  createSchemaField,
} from "@formily/vue";

const FormItem = connect(
  Form.Item,
  mapProps(
    {
      title: "label",
      description: "extra",
      required: true,
      validateStatus: true,
    },
    (props, field) => {
      return {
        ...props,
        help: field.selfErrors?.length ? field.selfErrors : undefined,
      };
    }
  )
);

const { SchemaField } = createSchemaField({
  components: {
    Input,
    FormItem,
  },
});

setValidateLanguage("en");

export default {
  components: {
    SchemaField,
    FormProvider,
    FormConsumer,
  },
  props: {
    schema: Object,
  },
  data() {
    const form = createForm({ validateFirst: true });
    return {
      form,
    };
  },
  methods: {
    submitHandler(data) {
      this.$emit("submit", data);
    },
  },
};
</script>
