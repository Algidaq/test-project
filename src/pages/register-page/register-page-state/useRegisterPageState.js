import { useState } from 'react';
import StateEnum from '../../../enums/StateEnum';
import { initialRegisterState } from './RegisterPageState';
import RegisterService from '../services/RegisterService';
import { showErrorToast } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';
/**
 *
 * @param {Object} obj
 * @param {RegisterService} obj.service
 * @returns
 */
const useRegisterPageState = ({ service }) => {
  const [state, setState] = useState(initialRegisterState);
  const navigate = useNavigate();
  /**
   *
   * @param {import('./RegisterPageState').RegisterForm} values
   * @param {import('formik').FormikHelpers} helpers
   */
  async function handleFormSubmit(values, helpers) {
    setState((state) => ({ ...state, stateEnum: StateEnum.busy }));
    try {
      const { data } = await service.registerUser(values);
      console.log(data);
      setState((state) => ({ ...state, stateEnum: StateEnum.success }));
      navigate({ pathname: 'login' });
    } catch (e) {
      const message = e.message ?? 'An Occured Try Again';
      setState((state) => ({
        ...state,
        stateEnum: StateEnum.error,
        error: message,
      }));
    }
  }

  const togglePasswordVisiblity = () =>
    setState((prev) => ({ ...prev, hidePassword: !prev.hidePassword }));
  return { state, handleFormSubmit, togglePasswordVisiblity };
};

export default useRegisterPageState;
