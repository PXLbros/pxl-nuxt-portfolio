<template>
<div class="inner-column">
    <div>
        <h1 class="title">
            Portfolio Website
        </h1>
        <h2 class="subtitle">
            Portfolio website template
        </h2>
        <LayerComponent :items="projects" />
    </div>
</div>
</template>

<script>
import LayerComponent from '~/components/LayerComponent.vue'

export default {
    head() {
        return {
            title: 'Portfolio Website',
            description: 'Home page meta description',
            meta: [
                {
                    name: 'twitter:title',
                    content: 'Portfolio Website'
                },
                {
                    name: 'twitter:description',
                    content: 'Home page meta description'
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
        LayerComponent
    },
    computed: {
        projects() {
            return this.$store.state.projects.all.filter(project => project.isFeatured);
        }
    }
}
</script>

<style lang="scss">
/* Transitions using the page hook */
.page-enter-active,
.page-leave-active {
    transition: all 0.30s ease;
}
.page-enter,
.page-leave-active {
    opacity: 0;
    transform-origin: 50% 50%;
}
// .page-enter-active {
//   animation: acrossIn .20s ease both;
// }
// .page-leave-active {
//   animation: acrossOut .40s ease both;
// }
// @keyframes acrossIn {
//   0% {
//     transform: translate3d(-100%, 0, 0);
//   }
//   100% {
//     transform: translate3d(0, 0, 0);
//   }
// }
// @keyframes acrossOut {
//   0% {
//     transform: translate3d(0, 0, 0);
//   }
//   100% {
//     transform: translate3d(100%, 0, 0);
//   }
// }
</style>
