<template>
  <div>
    <b-card-group>
      <b-row v-for="(place, index) in favorite" :key="index">
        <b-card>
          <b-col cols="3">
            <b-card-img :src="place.image" :alt="place.title" img-left class="rounded-0"></b-card-img>
          </b-col>
          <b-col cols="9">
            <b-card-body class="card_text-content" :title="place.title">
              <span class="card_price">{{ getPriceRange(place.priceRange) }}</span>
              <b-card-text>
                {{ place.description }}
              </b-card-text>
              <div class="card-actions">
                <b-link class="card-button" href="#foo">Read more</b-link>
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

export default {
  name: "Favorite",
  data() {
    return {}
  },
  methods: {
    getPriceRange(count) {
      return '$'.repeat(count)
    }
  },
  computed: {
    ...mapGetters(['favorite'])
  }
}
</script>
