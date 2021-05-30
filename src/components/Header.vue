<template>
  <div class="header">
    <div class="header-menu">
      <b-tabs class="header-menu_tab" align="center">
        <b-tab title="City guide" active @click="changeTab('city_guide')">
          <CityGuide/>
        </b-tab>
        <b-tab title="Favorite" @click="changeTab('favorite')">
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
import { mapActions } from 'vuex'

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
  methods: {
    ...mapActions(['changeTab'])
  }
}
</script>

<style lang="less" >
.header {
  position: relative;
  margin-top: 11px;
  margin-left: 147px;
  margin-right: 30px;

  @media (max-width: 1200px) {
      margin-left: unset;
  }

  .header-menu {
    position: relative;
    margin-bottom: 25px;
    height: 50px;

    background: #EEEEEE;

    .header-menu_tab {
      width: inherit;
      height: 38px;

      @media (max-width: 1200px) {
        margin: 0 60px;
      }

      @media (max-width: 350px) {
        margin: unset;
      }

      .nav-tabs {
        border-bottom: none;

        .nav-item {
          height: 50px;

          a {
            padding: 0;
            font-family: Helvetica;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 50px;
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

            @media (max-width: 540px) {
              margin-right: 10%;
            }
          }

        }
      }
    }

    .tab-content {
      margin-top: 107px;

      @media (max-width: 991px) {
        margin-top: 400px;
      }

      @media (max-width: 540px) {
        margin-top: 450px;
      }

      @media (max-width: 371px) {
        margin-top: 480px;
      }
    }
  }
}

</style>
