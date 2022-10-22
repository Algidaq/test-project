import { useState } from 'react';
import { initialLoginFormState } from './LoginPageState';
import StateEnum from '../../../enums/StateEnum';
import { AuthService } from '../../../services/AuthService';
import { useNavigate } from 'react-router-dom';
/**
 *
 * @param {Object} obj
 * @param {AuthService} obj.service
 * @returns
 */
const useLoginPage = ({ service }) => {
  const [state, setState] = useState(initialLoginFormState);
  const navigate = useNavigate();
  /**
   *
   * @param {import('./LoginPageState').LoginForm} values
   * @param {import('formik').FormikHelpers} helpers
   */
  async function handleFormSubmit(values, helpers) {
    setState((state) => ({ ...state, stateEnum: StateEnum.busy }));
    try {
      const { data } = await service.login(values);
      setState((state) => ({ ...state, stateEnum: StateEnum.success }));
      localStorage.setItem('token', data['token'] ?? '');
      navigate({ pathname: '/profile' });
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
export default useLoginPage;
