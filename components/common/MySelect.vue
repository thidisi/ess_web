<template>
  <vue-select
    v-model="selectValue"
    autocomplete="nope"
    :label="label"
    :placeholder="placeholder"
    :options="options"
    :clearable="clearable"
  />
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    value: {
      type: [Number, String],
      required: false,
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Lựa chọn'
    },
    label: {
      type: String,
      required: false,
      default: 'value'
    },
    receive: {
      type: String,
      required: false,
      default: 'id'
    },
    clearable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    selectValue: {
      get () {
        return this.options.find(e => e[this.receive] === this.value);
      },
      set (val) {
        this.$emit('input', val ? val[this.receive] : null);
      }
    }
  }
};
</script>
