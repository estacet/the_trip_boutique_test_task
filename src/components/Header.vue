<template>
  <div>
    <HeaderMenu/>
    <HeaderFilters/>
  </div>
</template>

<script>
import HeaderMenu from './Header-menu'
import HeaderFilters from './Header-filters'

export default {
  name: "Header",
  components: {
    HeaderMenu,
    HeaderFilters
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
