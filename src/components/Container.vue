<template>
  <div id="container" class="container-fluid">
    <b-row>
      <b-col lg="7" md="12" sm="12">
        <Header/>
      </b-col>
      <b-col lg="5" md="12" sm="12">
        <Map/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from './Header'
import Map from "./Map";
export default {
  name: "Container",
  components: {
    Map,
    Header
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less">
  #container {
    position: relative;
    top: 88px;
    height: 100vh;
    padding-top: 42px;

    background: #FFFFFF;

    .row > .col-* {
      padding: unset;
    }
  }
</style>
