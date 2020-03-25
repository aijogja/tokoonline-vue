import axios from 'axios'

export default {
  authToken (username, password, callback) {
    axios
      .post('https://tokoonline-api.herokuapp.com/api/auth-token/', {
        username: username,
        password: password
      })
      .then(res => {
        callback(res.data)
      })
  }
}
