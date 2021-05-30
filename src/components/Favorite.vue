<template>
  <div>
    <b-card-group>
      <b-row v-for="(place, index) in favorite" :key="index">
        <b-card class="place">
          <b-col cols="3" class="img-block">
            <b-card-img :src="place.image" :alt="place.title" img-left class="rounded-0"></b-card-img>
          </b-col>
          <b-col cols="9">
            <b-card-body class="card_text-content" :title="place.title">
              <span class="card_price">{{ getPriceRange(place.priceRange) }}</span>
              <span class="card-price_span">{{ getPriceRange(5-place.priceRange) }}</span>
              <b-card-text>
                {{ place.description }}
              </b-card-text>
              <div class="card-actions">
                <b-link class="card-button" href="#foo"><span class="d-none d-md-inline">Read</span> more</b-link>
              </div>
            </b-card-body>
          </b-col>
        </b-card>
      </b-row>
    </b-card-group>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getPriceRange} from "@/helper";
export default {
  name: "Favorite",
  methods: {
    getPriceRange
  },
  computed: {
    ...mapGetters(['favorite'])
  }
}
</script>

