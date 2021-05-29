<template>
  <div id="container">
    <b-row>
      <b-col cols="7">
        <Header/>
      </b-col>
      <b-col cols="5">
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
<style lang="less" scoped>
  #container {
    position: relative;
    top: 88px;
    height: 100vh; //TODO: do smth
    padding-top: 42px;

    background: #FFFFFF;
  }
</style>
