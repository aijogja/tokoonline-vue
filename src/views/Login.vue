<template>
    <div class="mt-5 p-5">
        <mdb-container fluid grid-list-xl>
            <mdb-row>
                <mdb-col col="12">
                    <h1>Login</h1>
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
  } from "mdbvue";

export default {
  name: 'Login',
  components: {
      mdbContainer,
      mdbRow,
      mdbCol,
  }
}
</script>