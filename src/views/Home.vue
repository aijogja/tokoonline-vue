<template>
  <div class="mt-5 p-5">
    <mdb-container fluid grid-list-xl>
      <mdb-row>
        <mdb-col col="12">
          <h1>Home</h1>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-container>
      <mdb-row>
        <mdb-col sm="4" class="pt-5" v-for="product in products" :key="product.id">
          <mdb-card>
            <mdb-view hover>
              <a href="#!">
                <mdb-card-image
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                  alt="Card image cap"/>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body>
              <mdb-card-title>{{product.nama}} - {{product.merk}}</mdb-card-title>
              <mdb-card-text>Harga Rp. {{product.harga}}</mdb-card-text>
              <mdb-btn color="primary">Add to Cart</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbView,
  mdbMask
} from 'mdbvue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask
  },
  computed: mapState({
    products: state => state.products.all
  }),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
