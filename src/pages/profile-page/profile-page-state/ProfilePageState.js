/**
 * @typedef {{firstName:string,lastName:string,email:string,photos:[any]}} User
 */

import StateEnum from '../../../enums/StateEnum';

/**
 * @typedef {{user:User | undefined,stateEnum:import("../../../enums/StateEnum").StateEnum,error:any}} ProfilePageState
 */

/**
 * @type {ProfilePageState}
 */
export const initialProfilePageState = {
  stateEnum: StateEnum.busy,
  user: null,
  error: null,
};
