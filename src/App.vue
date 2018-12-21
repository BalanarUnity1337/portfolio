<template>
<body id="app" class="page-wrapper">
  <header class="page-header">
    <router-menu class="menu-list--header" v-bind:menu-items="menuItems"/>
  </header>

  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
  >
    <router-view v-bind:key="key"/>
  </transition>
</body>
</template>

<script>
import 'animate.css';
import 'nprogress/nprogress.css';

export default {
  name: 'app',

  components: {
    'router-menu': () => import('@/components/RouterMenu.vue')
  },

  data() {
    return {
      menuItems: [
        {
          href: '/',
          text: 'Home'
        },
        {
          href: '/portfolio',
          text: 'Portfolio',
          menuItems: [
            {
              href: '/portfolio/atlantida',
              text: 'Atlantida'
            },
            {
              href: '/portfolio/brume',
              text: 'Brume'
            },
            {
              href: '/portfolio/cakes',
              text: 'Cakes'
            },
            {
              href: '/portfolio/miushi',
              text: 'Miushi'
            },
            {
              href: '/portfolio/nerds',
              text: 'Nerds'
            },
            {
              href: '/portfolio/olimp',
              text: 'Olimp'
            },
            {
              href: '/portfolio/pex',
              text: 'Pex'
            },
            {
              href: '/portfolio/reen',
              text: 'Reen'
            }
          ]
        }
      ]
    };
  },

  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss">
@import './sass/style.scss';
</style>
