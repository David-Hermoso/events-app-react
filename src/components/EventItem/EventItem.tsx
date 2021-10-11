import React from 'react';
import './EventItem.scss';
import FreeTag from '../FreeTag/FreeTag';
import { EventItemState } from './EventItem.state';
import moment from 'moment';

class EventItem extends React.Component<any, EventItemState> {
  render() {
    const startTime: string = moment(this.props.event.startDate).format('HH:mm');
    const startDate = moment(this.props.event.startDate);
    const endDate = moment(this.props.event.endDate);
    const eventDuration = endDate.diff(startDate);
    const minutes = moment.duration(eventDuration).minutes();
    const hours = Math.trunc(moment.duration(eventDuration).asHours());
    const hoursDurationLabel = hours > 0 ? `${hours} h.` : null;
    const minutesDurationLabel = minutes > 0 ? `${minutes} h.` : null;

    return (<div className={'event__item'}>
      <div className={'event__time--l'}>
        <p>
          {startTime}
        </p>
      </div>
      <div className={'event__details'}>
        <h2 className={'event__title'}>
          {this.props.event.eventName}
        </h2>
        <p className={'event__info'}>
          <span className={'event__time--s'}>
            {startTime}
            <span className={'split'}>-</span>
          </span>
          <span className={'event__city'}>
            {/*TODO: Combine APIs data to get City name form City ID*/}
            Palma de Mallorca
          </span>
          <span className={'split'}>-</span>
          <span className={'event__duration'}>
            {hoursDurationLabel} {minutesDurationLabel}
          </span>
        </p>
        {this.props.event.noTicketRequired ? <FreeTag/> : null}
      </div>
      {this.props.children}
    </div>)
  }
}

export default EventItem;
