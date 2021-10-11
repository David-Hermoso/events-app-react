const initialState = {
  modalProps: {
    modalType: null,
  }
};

// TODO: Type of action and type of state and default state
const modal = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modalProps: action.modalProps
      };
    case 'CLOSE_MODAL':
      return initialState;
    default:
      return state;
  }
};

export default modal;
