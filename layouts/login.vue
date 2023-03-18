<template>
  <div class="wrapper">
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  middleware: ['noAuthenticated']
};
</script>
