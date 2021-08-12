import produce from 'immer';
import { DECREMENT, INCREMENT } from './constants';

export const initialState = {
  value: 0,
};

const homepageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.value += 1;
        break;
      case DECREMENT:
        draft.value -= 1;
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default homepageReducer;
