import { SET_PARAMETER } from './constant';

const initialState = { parameterId: 0 };
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PARAMETER:
      return {
        parameterId: payload
      };
    default: {
      return state;
    }
  }
};
