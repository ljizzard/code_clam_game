<template lang="html">
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="css" scoped>
h1 {
  font: 50px tahoma;
}
</style>
