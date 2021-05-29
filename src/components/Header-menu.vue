<template>
  <div class="header-menu">
    <b-tabs class="header-menu_tab">
      <b-tab title="City guide" class="" active>

      </b-tab>
      <b-tab title="Favorite" class="">

      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "Header-menu",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" >
.header-menu {
  position: absolute;
  width: 754px;
  height: 50px;
  left: 147px;
  top: 141px;

  background: #EEEEEE;

  .header-menu_tab {
    position: absolute;
    width: 228px;
    height: 38px;
    left: 263px;

    .nav-tabs {
      margin: 12px 0;
      border-bottom: none;

      .nav-item {
        height: 26px;

        a {
          padding: 0;
          font-family: Helvetica;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: left;

          background-color: unset;
          border: none;

          color:  #999999;
        }

      .active {
         color: #333333;;
      }

        &:first-child {
          margin-right: 98px;
        }

      }
    }
  }
}

</style>
