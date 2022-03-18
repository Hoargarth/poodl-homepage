<template>
  <div id="app">
    <poodl-navigation />
    <div class="background-wall"></div>
    <div class="view-container">
      <router-view /> 
      <poodl-footer />
      <poodl-floating-buy />
    </div>
  </div>
</template>