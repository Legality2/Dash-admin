import axios from "axios";
import jwt from 'jwt-decode';
const API_URL = "http://localhost:4000/api/auth";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          console.log(response.data.token)
          localStorage.setItem("user", JSON.stringify(response.data.token.token));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
     var dToken =  JSON.parse(localStorage.getItem('user'));
     if(dToken !== null){
      var decoded = jwt(dToken);
      console.log(decoded);
      return decoded
     } else {
       return null
     }
  }
}

export default new AuthService();