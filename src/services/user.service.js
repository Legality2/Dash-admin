import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000';

class UserService {
  getUserContent() {
    return axios.get(API_URL + '/api/auth/me');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default UserService;