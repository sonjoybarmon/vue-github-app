<template>
  <div class="user-card">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    msg: String,
  },
};
</script>

<style></style>
