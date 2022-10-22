import jwtDecode from 'jwt-decode';
import ApiService from '../ApiService';

class AuthService extends ApiService {
  constructor() {
    super('/user/login');
  }
  /**
   *
   * @param {{email:string,password:string}} data
   * @returns
   */
  login = async (data) => {
    return this.post({ ...data });
  };

  isUserLoggedIn = () => {
    try {
      const token = localStorage.getItem('token');
      const user = jwtDecode(token ?? '');
      return true;
    } catch (e) {
      return false;
    }
  };
}

export default AuthService;
