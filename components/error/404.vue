<template>
  <div>
    <div class="page-header mb-n text-center" style="padding: 200px 0;">
      <div class="container" style="text-align: center;">
        <p class="error-code">
          404
        </p>
        <h1>This page doesn’t exist</h1>
        <p>The link you clicked on may be broken or no longer exist.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head: {
    title: '404 - This page doesn’t exist'
  }
};
</script>
