<template>
  <div class="repos">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "ReposComponent",
  props: {
    msg: String,
  },
};
</script>

<style></style>
