import * as Yup from 'yup';
import StateEnum from '../../../enums/StateEnum';

/**
 * @typedef {{email:string,password:string}} LoginForm
 */
/**
 * @typedef {{stateEnum:import('../../../enums/StateEnum').StateEnum,error:any,hidePassword:boolean}} LoginFormState
 */
/**
 * @type {LoginForm}
 */
const initialLoginFormValues = {
  email: '',
  password: '',
};

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).max(50).label('Password'),
});
/**
 * @type {LoginFormState}
 */
const initialLoginFormState = {
  stateEnum: StateEnum.idle,
  error: null,
  hidePassword: true,
};

export {
  initialLoginFormState,
  initialLoginFormValues,
  loginFormValidationSchema,
};
