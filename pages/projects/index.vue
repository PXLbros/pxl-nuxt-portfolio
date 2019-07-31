<template lang="html">
  <div class="inner-column">
    <h1 class="title">Projects</h1>

    <GridComponent :items="projects"/>
  </div>
</template>

<script>
import GridComponent from '~/components/GridComponent.vue'

export default {
    head() {
        return {
            title: 'Projects | Portfolio Website',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Project page meta description'
                },
                {
                    name: 'twitter:title',
                    content: 'Projects | Portfolio Website'
                },
                {
                    name: 'twitter:description',
                    content: 'Projects page meta description'
                },
                {
                    name: 'twitter:image',
                    content: 'https://placehold.it/1200x600'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                }
            ]
        }
    },
    components: {
        GridComponent
    },
    pageTransition: {
        name: 'test',
        mode: 'out-in'
    },
    computed: {
        projects() {
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
