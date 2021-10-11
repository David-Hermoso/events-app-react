import React from 'react';
import './EventsDayTitle.scss';

class EventsDayTitle extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<h2 className={'events__day-title'}>{this.props.title}</h2>)
  }
}

export default EventsDayTitle;
