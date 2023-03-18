<template>
  <section v-show="isActive"
           :id="computedId"
           :aria-hidden="!isActive"
           class="tabs-component-panel"
           role="tabpanel"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isActive: false,
    isVisible: true
  }),
  computed: {
    header () {
      return this.name;
    },
    computedId () {
      return this.id ? this.id : this.name.toLowerCase().replace(/ /g, '-');
    },
    hash () {
      if (this.isDisabled) {
        return '#';
      }
      return '#' + this.computedId;
    }
  }
};
</script>
