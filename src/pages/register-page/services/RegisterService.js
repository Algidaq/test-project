import ApiService from '../../../services/ApiService';

class RegisterService extends ApiService {
  constructor() {
    super('/user/register');
  }
  /**
   * @param {import('./../register-page-state/RegisterPageState').RegisterForm} data
   */
  registerUser = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    return this.upload(data);
  };
}

export default RegisterService;
