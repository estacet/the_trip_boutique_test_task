<template>
  <div class="header-filters">
    <b-button class="filter-price" @click="applyPriceFilter(1)">$</b-button>
    <b-button class="filter-price" @click="applyPriceFilter(2)">$$</b-button>
    <b-button class="filter-price" @click="applyPriceFilter(3)">$$$</b-button>
    <b-button class="filter-price" @click="applyPriceFilter(4)">$$$$</b-button>
    <b-button class="filter-price" @click="applyPriceFilter(5)">$$$$$</b-button>
    <b-button class="filter-price active" @click="resetFilter()">All</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Header-filters",
  data() {
    return {}
  },
  methods: {
    ...mapActions(['applyPriceFilter', 'resetFilter']),
  }
}
</script>
<style lang="less" scoped>
.header-filters {
  display: flex;
  justify-content: center;

  @media (max-width: 540px) {
    display: block;
  }

  .filter-price {
    margin: 0 12px;
    width: 100px;
    height: 34px;

    background-color: #EEEEEE;
    border: none;
    border-radius: 14px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;

    color: #5A5A5A;

    @media (max-width: 540px) {
      margin-bottom: 10px;
    }
  }

}

</style>