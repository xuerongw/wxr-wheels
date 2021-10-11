<template>
  <div class="animation">
    <img src="@/assets/select.svg" alt="" class="anima" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.anima:hover {
  animation: down 1s ease;
  animation-fill-mode: forwards;
}
@keyframes down {
  100% {
    transform: rotate(180deg);
  }
}
.anima {
  animation: up 1s ease;
  animation-fill-mode: forwards;
}
@keyframes up {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>