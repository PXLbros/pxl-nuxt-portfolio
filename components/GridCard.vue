<template lang="html">
  <article class="item">
    <nuxt-link
      :to="{name: 'projects-slug', params: {slug: item.slug}}"
      :key="item.slug"
    >
      <img class="item-img" src="https://placehold.it/1200x600" :alt="item.title">
      <h2>{{item.title}}</h2>
    </nuxt-link>
  </article>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>
</style>
