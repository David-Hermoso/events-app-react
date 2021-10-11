import React from 'react';
import './Modal.scss';

class Modal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<div className={'modal__container'}>
        <div className={'modal'}>
          <div className={'modal__header'}>
            <h3 className={'title'}>{this.props.modalConfig.title}</h3>
            <div className={'modal__close-btn'}>
            </div>
          </div>
          <div className={'modal__body'}>
            <p className={'regular__text'}>
              {this.props.modalConfig.text}
            </p>
          </div>
          <div className={'modal__footer'}>
            <button className={'btn secondary'}
                    onClick={() => {
                      this.props.onCancel()
                    }}>
              No
            </button>
            <button className={'btn primary modal__btn'}
                    onClick={() => {
                      this.props.onAccept()
                    }}>
              Yes
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
