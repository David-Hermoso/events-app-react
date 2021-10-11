import React from 'react'
import { connect } from 'react-redux';
import SignUpModal from '../SignUpModal/SignUpModal'
import './Confirmation.scss';

const MODAL_COMPONENTS = {
  'SIGN_UP': SignUpModal
};

const ModalRoot = (modalProps: any) => {
  if (!modalProps.modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS['SIGN_UP'];

  return <SpecificModal {...modalProps} />
};

export default connect(
  (state: any) => {
    return state.modal.modalProps;
  }
)(ModalRoot)
