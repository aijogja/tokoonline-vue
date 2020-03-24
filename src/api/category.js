import axios from 'axios';

export default {
  getCategories (callback) {
    axios
        .get('https://tokoonline-api.herokuapp.com/api/kategori/')
        .then(res => {
          callback(res.data);
        })
  },
  getCategoryDetail (categoryId, callback) {
    axios
        .get('https://tokoonline-api.herokuapp.com/api/kategori/'+categoryId)
        .then(res => {
          callback(res.data);
        })
  },
}
