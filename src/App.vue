<template>
  <TheHeader title="Learning Resources App"></TheHeader>
  <!-- <StoredResources :resources="storedResources"></StoredResources> -->
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
// import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
  components: {
    // StoredResources,
    TheHeader,
    TheResources
  }
}
</script>

<!-- not scoped, so global! -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>