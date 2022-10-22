import { useEffect, useState } from 'react';
import StateEnum from '../../../enums/StateEnum';
import ProfileService from '../ProfileService/ProfileService';
import { initialProfilePageState } from './ProfilePageState';
/**
 *
 * @param {Object} obj
 * @param {ProfileService} obj.service
 * @returns
 */
const useProfilePageState = ({ service }) => {
  const [state, setState] = useState(initialProfilePageState);

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadUserData() {
    setState((prev) => ({ ...state, stateEnum: StateEnum.busy }));
    try {
      const { data } = await service.getProfileData();
      const user = { ...data };
      setState((prev) => ({ ...prev, stateEnum: StateEnum.success, user }));
    } catch (e) {
      console.log(e);
      const errorMessage = e?.message ?? 'An Error Occured';
      setState((prev) => ({
        ...prev,
        stateEnum: StateEnum.error,
        error: errorMessage,
      }));
    }
  }
  return { state, loadUserData };
};

export default useProfilePageState;
