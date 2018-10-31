<template>
  <div>
    <Triptych v-if="level > 0" :level="level - 1" class="top-child" />
    <Triptych v-if="level > 0" :level="level - 1" class="left-child" />
    <Triptych v-if="level > 0" :level="level - 1" class="right-child" />
    <div v-if="level === 0" class="left-line"/>
    <div v-if="level === 0" class="right-line"/>
    <div class="circle"/>
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
.circle {
  transform: scale(0.867);
  height: 400px;
  width: 400px;
  background-color: #000;
  opacity: 0.05;
  border-radius: 50%;
  top: -200px;
  left: -200px;
  position: absolute;
  /* display: inline-block; */
}
.left-child {
  position: absolute;
  top: 50px;
  left: -87px;
  transform: scale(0.5) rotate(-120deg);
}
.right-child {
  position: absolute;
  top: 50px;
  left: 87px;
  transform: scale(0.5) rotate(120deg);
}
.top-child {
  position: absolute;
  top: -100px;
  left: 0px;
  transform: scale(0.5);
}
.left-line {
  position: absolute;
  top: 1px;
  left: 0px;
  border: 1px black solid;
  width: 170px;
  transform: rotate(120deg);
  transform-origin: 0 0;
}
.right-line {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px black solid;
  width: 170px;
  transform: rotate(60deg);
  transform-origin: 0 0;
}
</style>
