import { OPEN_MODAL, CLOSE_MODAL } from '../inizio/actions';

const reducer = (state, action) => {
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      isModalOpen: true,
    };
  }

  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  return state;
};

export default reducer;
