<template>
  <div class="main-container">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .3s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
