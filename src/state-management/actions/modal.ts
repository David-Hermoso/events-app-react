export const openModal = (props: any) => {
  return {
    ...props,
    type: 'OPEN_MODAL'
  }
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
};
