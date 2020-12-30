<template>
  <div>
    <l-map style="height: 350px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 16,
      center: [0, 0],
      markerLatLng: [0, 0]
    }
  },
  methods: {
    getLokasi () {
      this.$getLocation({ enableHighAccuracy: true })
        .then(coordinates => {
          this.center = []
          this.markerLatLng = []
          this.center.push(coordinates.lat)
          this.center.push(coordinates.lng)
          this.markerLatLng.push(coordinates.lat)
          this.markerLatLng.push(coordinates.lng)
          console.log('center', this.center)
          console.log('marker', this.markerLatLng)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getLokasi()
  }
}
</script>
