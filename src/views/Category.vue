<template>
    <div class="mt-5 p-5">
        <mdb-container fluid grid-list-xl>
            <mdb-row>
                <mdb-col col="12">
                    <h1>Category {{categoryId}}</h1>
                </mdb-col>
            </mdb-row>
        </mdb-container>
        <mdb-container>
            <mdb-row>
                <mdb-col sm="4" class="pt-5">
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
                            <mdb-card-title>Nama Produk</mdb-card-title>
                            <mdb-card-text>Deskripsi</mdb-card-text>
                            <mdb-btn color="primary">Add to Cart</mdb-btn>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col sm="4" class="pt-5">
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
                            <mdb-card-title>Nama Produk</mdb-card-title>
                            <mdb-card-text>Deskripsi</mdb-card-text>
                            <mdb-btn color="primary">Add to Cart</mdb-btn>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col sm="4" class="pt-5">
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
                            <mdb-card-title>Nama Produk</mdb-card-title>
                            <mdb-card-text>Deskripsi</mdb-card-text>
                            <mdb-btn color="primary">Add to Cart</mdb-btn>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col sm="4" class="pt-5">
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
                            <mdb-card-title>Nama Produk</mdb-card-title>
                            <mdb-card-text>Deskripsi</mdb-card-text>
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
      mdbMask,
  } from "mdbvue";

export default {
  name: 'Category',
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
      mdbMask,
  },
  props: {
    categoryId: Number
  }
}
</script>