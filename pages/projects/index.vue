<template lang="html">
  <div class="inner-column">
    <h1 class="title">Projects</h1>

    <div class="projects item-list">
      <nuxt-link
        class="item"
        v-for="project in projects"
        :to="{name: 'projects-slug', params: {slug: project.slug}}"
        :key="project.slug"
      >
        <img class="item-img" src="http://placehold.it/1200x600" :alt="project.title">
        <h2>{{project.title}}</h2>
      </nuxt-link>
    </div>
  </div>

</template>

<script>
export default {
  head () {
    return {
      title: 'Projects | Portfolio Website',
      description: 'Project page meta description',
      meta: [
        { name: 'twitter:title', content: 'Projects | Portfolio Website'},
        { name: 'twitter:description', content: 'Projects page meta description'},
        { name: 'twitter:image', content: 'http://placehold.it/1200x600'},
        { name: 'twitter:card', content: 'summary_large_image'}
      ]
    }
  },
  pageTransition: {
    name: 'test',
    mode: 'out-in'
  },
  computed: {
    projects () {
      return this.$store.state.projects.all
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-list {
    color: $gray;
    @include standard-grid();
  }
  .item-img {
    width: 100%;
    height: auto;
  }
</style>
