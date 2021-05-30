<template>
  <div class="map-container">
    <GmapMap
        :center="centerCoordinates"
        :zoom="zoom"
        map-type-id="terrain"
        class="map"
       >
      <GmapMarker
          :key="index"
          v-for="(marker, index) in placesMapMarkers"
          :position="marker.position"
          :clickable="true"
          :draggable="false"
          @click="toggleInfoWindow(marker,index)"
      />
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false" />
    </GmapMap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Map",
  data() {
    return {
      centerCoordinates: { lat: 52.5243700, lng: 13.4105300 },
      zoom: 11,
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: '',
        //optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
    }
  },
  computed: {
    ...mapGetters([
        'placesMapMarkers'
    ])
  },
  methods: {
    toggleInfoWindow(marker, idx) {
      let content = `<h4>${marker.name}</h4><p>${marker.address}</p>`;

      if (marker.phone) {
        content += `<p>${marker.phone}</p>`;
      }

      this.infoWindowPos = marker.position;
      this.infoOptions.content = content;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },

    positionMap() {
      document.querySelector('.map').style.top = 0
      document.querySelector('.map').style.position = 'fixed'
      document.querySelector('.map').style.height = '100%'
    }
  }
}
</script>
<style lang="less" scoped>
.map-container {
  width: 100%;

  @media (max-width: 991px) {
    margin: unset;
  }

  .map {
    width: 100%;
    height: 824px;

    @media (max-width: 991px) {
      margin: 20px 0;
      height: 252px;
    }
  }
}
</style>