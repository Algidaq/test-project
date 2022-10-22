import ApiService from '../../../services/ApiService';

class ProfileService extends ApiService {
  constructor() {
    super('/users/me');
  }

  getProfileData = () =>
    this.get(
      '',
      {},
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    );
}

export default ProfileService;
