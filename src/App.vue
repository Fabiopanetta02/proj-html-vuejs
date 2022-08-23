<template>
  <div id="app">
    <TheHeader />
    <BaseMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BaseMain from './components/BaseMain.vue';
import TheFooter from './components/TheFooter.vue';
import "@fontsource/poppins";
export default {
  name: 'App',
  components: {
    TheHeader,
    BaseMain,
    TheFooter
  }
}
</script>

<style lang="scss">
  @import './assets/style/global.scss';
</style>
