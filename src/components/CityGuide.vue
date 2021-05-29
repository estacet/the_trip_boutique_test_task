<template>
  <div>
    <b-card-group>
      <b-row v-for="(place, index) in cityGuide" :key="index">
        <b-card class="place">
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
                  <b-button class="card-button_favorite" @click="addToFavorite(place.id)">
                    <b-icon :icon="place.isFavorite ? 'heart-fill' : 'heart'"></b-icon>
                  </b-button>
                </div>
              </b-card-body>
            </b-col>
        </b-card>
      </b-row>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "CityGuide",
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['addToFavorite']),
    getPriceRange(count) {
      return '$'.repeat(count)
    }
  },
  computed: {
    ...mapGetters(['cityGuide', 'cityGuideByPrice'])

  }

}
</script>

<style lang="less" >
 .card.place {
   margin-bottom: 16px;
   height: 210px;
   padding: 0;
   border: none;
   border-radius: unset;
   background-color: #EEEEEE;

   .card-body {
        padding: 0;

     .col-3, .col-9 {
       display: inline-block;
       padding: 30px 16px 30px 15px;

       .card-img {
         width: 150px;
         height: 150px;
       }

       .card_text-content {

         .card-title, .card_price {
           display: inline-flex;
         }

         .card-title {
           margin-right: 22px;
           font-family: Helvetica;
           font-size: 20px;
           font-style: normal;
           font-weight: 700;
           line-height: 32px;
           letter-spacing: -0.03em;
           text-align: left;

         }

         .card_price {
           font-family: Helvetica;
           font-size: 16px;
           font-style: normal;
           font-weight: 700;
           line-height: 26px;
           letter-spacing: 0em;
           text-align: left;

         }

         .card-text {
           font-family: Helvetica;
           font-style: normal;
           font-weight: normal;
           font-size: 15px;
           line-height: 160%;

           letter-spacing: -0.01em;

           color: #999999;

         }

         .card-actions {
           position: absolute;
           bottom: 34px;

           .card-button {
             display: inline-block;
             height: 39px;
             width: 216px;
             text-align: center;

             line-height: 39px;
             font-family: Helvetica;
             font-style: normal;
             font-weight: normal;
             font-size: 15px;
             color: #EEEEEE;
             letter-spacing: -0.01em;
             background-color: #333333;

             text-decoration: none;

             &:hover {
               background-color: #4b4b4b;
             }

           }

           .card-button_favorite {
             display: inline-block;
             background-color: unset;
             border: none;
             color: #333333;
             outline: none;
             box-shadow: none;

             .bi-heart-fill {
               color: red;
             }
           }
         }
       }
     }

   }
 }

</style>
