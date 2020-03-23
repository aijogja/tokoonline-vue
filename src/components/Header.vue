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
            <mdb-dropdown-item :to="{name:'category', params:{categoryId:1}}">Category 1</mdb-dropdown-item>
            <mdb-dropdown-item :to="{name:'category', params:{categoryId:2}}">Category 2</mdb-dropdown-item>
            <mdb-dropdown-item :to="{name:'category', params:{categoryId:3}}">Category 3</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
        <mdb-nav-item :to="{name:'login'}">Login</mdb-nav-item>
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
  } from 'mdbvue';

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
      mdbDropdownItem,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
