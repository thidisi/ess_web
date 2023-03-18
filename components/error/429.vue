<template>
  <div>
    <div class="page-header mb-n text-center" style="padding: 200px 0;">
      <div class="container" style="text-align: center;">
        <p class="error-code">
          429
        </p>
        <h1>Too Many Requests</h1>
        <p>Bạn đã gửi quá nhiều requests tới server, vui lòng thử lại trong ít phút nữa.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error429',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head: {
    title: 'Too Many Requests'
  }
};
</script>
