import React from 'react';
import './Cta.scss';

class Cta extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<button className={'btn primary'} onClick={() => {
    }}>
      {this.props.text}
    </button>)
  }
}

export default Cta;
