<template>
  <div id="container">
    <Header/>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: "Container",
  components: {
    Header
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
  #container {
    position: relative;
    top: 88px;
    width: 1440px;
    height: 88px;   //TODO: delete height&width

    background: #FFFFFF;
  }
</style>
