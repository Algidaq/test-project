import * as Yup from 'yup';
import StateEnum from '../../../enums/StateEnum';
/**
 * @typedef {{firstName:string,lastName:string,email:string,password:string,photos:[File]}} RegisterForm
 */

/**
 * @typedef {{stateEnum:import('../../../enums/StateEnum').StateEnum,hidePassword:boolean,copyWith:(state:RegisterState)=>RegisterState,error:any}} RegisterState
 */

/**
 * @type {RegisterForm}
 */
const registerFormInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  photos: [],
};

const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .min(2)
    .max(25)
    .required()
    .label('First Name'),
  lastName: Yup.string()
    .required()
    .min(2)
    .max(25)
    .required()
    .label('Last Name'),
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().required().min(6).max(50).label('Password'),
  photos: Yup.array().required().min(4),
});

/**
 * @type {RegisterState}
 */
const initialRegisterState = {
  stateEnum: StateEnum.idle,
  hidePassword: true,
  error: null,
};

export {
  registerFormInitialValues,
  registerValidationSchema,
  initialRegisterState,
};
