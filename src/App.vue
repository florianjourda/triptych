<template>
  <div id="app">
    <Triptych class="root" :level=3 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Triptych from "./components/Triptych.vue";

@Component({
  components: {
    Triptych
  }
})
export default class App extends Vue {}
</script>

<style scoped>
.root {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
}
</style>
