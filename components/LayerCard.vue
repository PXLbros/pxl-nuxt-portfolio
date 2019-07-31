<template lang="html">
  <article class="layer-card">
    <div class="card-text">
      <h3>{{item.title}}</h3>
      <p>{{item.content}}</p>
      <nuxt-link class="button" :to="{name: 'projects-slug', params: {slug: item.slug}}">Learn More ></nuxt-link>
    </div>

    <nuxt-link class="card-image" :to="{name: 'projects-slug', params: {slug: item.slug}}">
      <figure>
        <img src="https://placehold.it/1200x600" alt="card image alt">
      </figure>
    </nuxt-link>
  </article>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>
.layer-card {
    display: flex;
    justify-content: space-between;
    margin-bottom: $pad*10;

    &:nth-child(odd) {
        flex-direction: row-reverse;
    }
}
.card-image {
    width: 60%;
}

.card-text {
    width: 35%;
}
</style>
