<template>
  <div class="home">
    <v-canvas/>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    'v-canvas': () => import('@/components/Canvas.vue')
  },

  data() {
    return {
      title: 'Ivan Elizentsev'
    };
  }
};
</script>
