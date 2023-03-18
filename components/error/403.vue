<template>
  <div>
    <div class="page-header mb-n text-center" style="padding: 200px 0;">
      <div class="container" style="text-align: center;">
        <p class="error-code">
          403
        </p>
        <h1>Forbidden</h1>
        <p>Access to this resource on the server is denied.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error403',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head: {
    title: 'Forbidden'
  }
};
</script>
