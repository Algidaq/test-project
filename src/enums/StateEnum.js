export const Busy = 'Busy';
export const Idle = 'Idle';
export const Success = 'Success';
export const kError = 'Error';
/**
 * @typedef {{busy:string,idle:string,error:string,success:string}} StateEnum
 */
const StateEnum = {
  busy: Busy,
  idle: Idle,
  error: kError,
  success: Success,
  isBusy: (value) => value === Success,
};

export default StateEnum;
