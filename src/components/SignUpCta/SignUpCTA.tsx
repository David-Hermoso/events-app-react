import React from 'react';
import './SignUpCTA.scss';
import { connect } from 'react-redux';

class SignUpCTA extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<div>
      <button className={'btn primary'} onClick={() => {
        this.props.dispatch(
          {
            type: 'OPEN_MODAL',
            modalProps: {
              eventId: this.props.eventId,
              modalType: 'SIGN_UP',
            }
          }
        )
      }}>
        Sign Up!
      </button>

    </div>)
  }
}

export default connect()(SignUpCTA)
