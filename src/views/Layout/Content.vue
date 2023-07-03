<template>
  <div class="content">
    <collapseTransition>
      <!-- your content here -->
      <router-view></router-view>
    </collapseTransition>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
export default {
  components: {
    CollapseTransition
  }
};
</script>
<style>

</style>
