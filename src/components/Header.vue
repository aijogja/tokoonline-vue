<template>
  <mdb-navbar color="indigo" position="top" scrolling dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      Toko Online
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item :to="{name:'home'}">Home</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Category</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <div v-for="category in categories" :key="category.id">
              <mdb-dropdown-item @click.native.prevent="getCategory(category.id)" :to="{name:'category', params:{categoryId:category.id}}">{{category.nama}}</mdb-dropdown-item>
            </div>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
        <mdb-nav-item v-if="!isAuthenticated" :to="{name:'login'}">Login</mdb-nav-item>
        <mdb-nav-item v-else @click.native.prevent="logout">Logout</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbDropdownItem
} from 'mdbvue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem
  },
  computed: {
    ...mapState({
      categories: state => state.categories.all
    }),
    ...mapGetters('auth', {
      isAuthenticated: 'isAuthenticated'
    })
  },
  created () {
    this.$store.dispatch('categories/getAllCategories')
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
    getCategory (categoryId) {
      this.$store.dispatch('categories/getCategoryDetail', {
        categoryId: categoryId
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
