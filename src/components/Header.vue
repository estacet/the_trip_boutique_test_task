<template>
  <div class="header">
    <div class="header-menu">
      <b-tabs class="header-menu_tab" align="center">
        <b-tab title="City guide" active>
          <CityGuide/>
        </b-tab>
        <b-tab title="Favorite">
          <Favorite/>
        </b-tab>
      </b-tabs>
    </div>
    <HeaderFilters/>
  </div>
</template>

<script>
import CityGuide from './CityGuide'
import Favorite from "@/components/Favorite";
import HeaderFilters from './Header-filters'

export default {
  name: "Header-menu",
  components: {
    CityGuide,
    Favorite,
    HeaderFilters
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" >
.header {

  .header-menu {
    position: absolute;
    margin-top: 11px;
    width: 754px;
    height: 50px;
    left: 147px;

    background: #EEEEEE;

    .header-menu_tab {
      position: absolute;
      //width: 228px;
      width: inherit;
      height: 38px;
      // left: 263px;

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

            color: #999999;
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

    .tab-content {
      position: absolute;
      top: 298px;
    }
  }
}

</style>
