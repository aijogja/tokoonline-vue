import category from '../../api/category'
import product from '../../api/product'

// initial state
const state = {
  all: [],
  detail: {},
  products: [],
}

// getters
const getters = {}

// actions
const actions = {
  getAllCategories ({ commit }) {
    category.getCategories(categories => {
      commit('setCategories', categories)
    })
  },
  getCategoryDetail ({ commit }, {categoryId}) {
    console.log(categoryId)
    category.getCategoryDetail(categoryId, category => {
      commit('setCategoryDetail', category)
    })
    product.getCategoryProducts(categoryId, products => {
      commit('setCategoryProducts', products)
    })
  }
}

// mutations
const mutations = {
  setCategories (state, categories) {
    state.all = categories
  },
  setCategoryDetail (state, category){
    state.detail = category
  },
  setCategoryProducts (state, products){
    state.products = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
