<template>
  <div class="mt-5 p-5">
    <mdb-container fluid grid-list-xl>
      <mdb-row>
        <mdb-col col="4"></mdb-col>
        <mdb-col col="4">
          <form @submit.prevent="login">
            <p class="h4 text-center mb-4">Sign in</p>
            <p>{{token}}</p>
            <div class="grey-text">
              <mdb-input v-model="username" label="Your username" type="text"/>
              <mdb-input v-model="password" label="Your password" type="password"/>
            </div>
            <div class="text-center">
              <mdb-btn type="submit">Login</mdb-btn>
            </div>
          </form>

        </mdb-col>
        <mdb-col col="4"></mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbBtn
} from 'mdbvue'
import { mapState } from 'vuex'

export default {
  name: 'Login',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: mapState({
    token: state => state.auth.token
  }),
  methods: {
    login () {
      this.$store.dispatch('auth/login', { username: this.username, password: this.password })
      // console.log(this.$route.query.redirect)
      // if (this.$route.query.redirect) {
      //   this.$router.push(this.$route.query.redirect)
      // }
    }
  }
}
</script>
