<template>
  <div>
    {{level}}
    <Triptych v-if="level > 0" :level="level - 1" class="top" />
    <Triptych v-if="level > 0" :level="level - 1" class="left" />
    <Triptych v-if="level > 0" :level="level - 1" class="right" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Triptych extends Vue {
  @Prop()
  private level!: number;
}
</script>

<style scoped>
.left {
  position: absolute;
  top: 50px;
  left: -87px;
}
.right {
  position: absolute;
  top: 50px;
  left: 87px;
}
.top {
  position: absolute;
  top: -100px;
  left: 0px;
}
</style>
