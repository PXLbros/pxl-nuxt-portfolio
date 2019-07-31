<template>
<div>
    <HeaderNavbar />

    <main>
        <nuxt />
    </main>

    <FooterComponent />
</div>
</template>

<script>
import HeaderNavbar from '~/components/HeaderNavbar.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default {
    components: {
        HeaderNavbar,
        FooterComponent
    }
}
</script>

<style>

</style>
