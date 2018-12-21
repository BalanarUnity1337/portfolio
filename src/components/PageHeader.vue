<template>
  <header class="page-header">
    <p class="page-header__title">{{ title }}</p>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
