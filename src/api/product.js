import axios from 'axios';

export default {
  getProducts (callback) {
    axios
        .get('https://tokoonline-api.herokuapp.com/api/produk/')
        .then(res => {
          callback(res.data);
        })
  },
  getCategoryProducts (categoryId, callback) {
    axios
        .get('https://tokoonline-api.herokuapp.com/api/produk/',{
          params: {
            kategori: categoryId
          }
        })
        .then(res => {
          callback(res.data);
        })
  },
}
