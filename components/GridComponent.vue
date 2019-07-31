<template lang="html">
  <section class="grid-component">
    <GridCard v-for="item in items" :key="item.id" :item="item"/>
  </section>
</template>

<script>
import GridCard from '~/components/GridCard.vue'

export default {
    props: ['items'],
    components: {
        GridCard
    },
}
</script>

<style lang="scss" scoped>
.grid-component {
    @include standard-grid();
}
</style>
