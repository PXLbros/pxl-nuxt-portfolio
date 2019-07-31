<template lang="html">
  <header class="inner-column header-nav">
    <nuxt-link :to="{name: 'index'}" class="logo text-lg">
      Logo
    </nuxt-link>

    <nav class="main-menu" role="navigation">
      <nuxt-link class="menu-item" :to="{name: 'projects'}">
        Projects
      </nuxt-link>
      <nuxt-link class="menu-item" :to="{name: 'contact'}">
        Contact
      </nuxt-link>
    </nav>
  </header>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
    padding: $pad 0;
}
.header-nav {
    display: flex;
    justify-content: space-between;
}
.main-menu {
    display: flex;
}
.menu-item {
    padding: $pad;

    &:last-child {
        padding-right: 0;
    }
}
</style>
