import React from 'react';
import { connect } from 'react-redux';
import EventsService from '../../services/events.service';
import Modal from '../Modal/Modal';

const mapStateToProps = (state: any) => {
  return state.modal.modalProps;
};

class SignUpModal extends React.Component<any, any> {
  eventsService: EventsService = new EventsService();

  modalConfig: any;

  constructor(props: any) {
    super(props);
    this.buildModalConfig();
  }

  render() {
    return (<div>
      <Modal modalConfig={this.modalConfig}
             onAccept={() => {
               this.onAcceptHandler();
             }}
             onCancel={() => {
               this.onCancelHandler();
             }}
      />
    </div>)
  }

  buildModalConfig() {
    this.modalConfig = {
      title: 'Sign up to event',
      text: `Do you want to sign up to ${this.props.eventId}`
    };
  }

  onAcceptHandler() {
    this.eventsService.signUpToEvent(this.props.eventId).then(
      () => {
        this.props.dispatch({
          type: 'CLOSE_MODAL'
        })
      }, () => {
        console.log('Should notify user that already signed up for that event. ' +
          'In fact, this should not happen. We should disable the button in the All events list.')
      })
  }

  onCancelHandler() {
    this.props.dispatch({
      type: 'CLOSE_MODAL'
    })
  }
}

export default connect(mapStateToProps)(SignUpModal)

