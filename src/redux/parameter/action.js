import { SET_PARAMETER } from './constant';

export const setParameter = data => {
  return {
    type: SET_PARAMETER,
    payload: data
  };
};
