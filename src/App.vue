<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
export default {
  name: 'AppVue',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import './style/reset.scss';
@font-face {
  font-family: 'maplestory';
  src: url('./assets/font/maplestory.ttf');
}
</style>
