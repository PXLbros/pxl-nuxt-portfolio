<template lang="html">
  <section class="layer-component">
    <LayerCard v-for="item in items" :key="item.id" :item="item"/>
  </section>
</template>

<script>
import LayerCard from '~/components/LayerCard.vue'
export default {
    components: {
        LayerCard
    },
    props: ['items']
}
</script>

<style lang="css" scoped>
</style>
