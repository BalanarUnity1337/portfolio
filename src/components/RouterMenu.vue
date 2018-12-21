<template>
  <ul class="menu-list">
    <li class="menu-list__item" v-for="(menuItem, index) in menuItems" v-bind:key="index">
      <router-link class="menu-list__item-link" v-bind:to="menuItem.href">{{ menuItem.text }}</router-link>

      <ul v-if="menuItem.menuItems" class="menu-list__sub-list">
        <li
          v-for="(menuItem, index) in menuItem.menuItems"
          v-bind:key="index"
          class="menu-list__item"
        >
          <router-link class="menu-list__item-link" v-bind:to="menuItem.href">{{ menuItem.text }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RouterMenu',

  props: {
    menuItems: {
      type: Array,
      required: true
    }
  }
};
</script>
