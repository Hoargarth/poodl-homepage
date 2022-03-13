<template>
  <div id="app">
    <poodl-navigation />
    <div class="background-wall"></div>
    <div class="view-container">
      <router-view /> 
      <poodl-footer />
    </div>
  </div>
</template>

<script>
import PoodlNavigation from './layouts/PoodlNavigation.vue';

export default {
  components: {PoodlNavigation},
};
</script> 