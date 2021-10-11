import React from 'react';
import { Event } from '../../models/event.model';
import './EventsList.scss';
import EventItem from '../EventItem/EventItem';
import EventsDayTitle from '../EventsDayTitle/EventsDayTitle';
import { EventsListState } from './EventsList.state';
import moment from 'moment';

class EventsList extends React.Component<any, EventsListState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const CtaComponent = this.props.cta;
    return (
      this.props.events.map((eventsDay: Event[], index: number) => {
        return <div key={index}>
          <EventsDayTitle title={moment(eventsDay[0].startDate).format('dddd Do MMMM')}/>
          <div className={'dayevents__list'}>
            {
              eventsDay.map((event: Event, index: number) => {
                return <div
                  className={'dayevents__event'}
                  key={index}>
                  <EventItem
                    event={event}
                    key={index}>
                    <div className={'event__cta'}>
                      <div
                        key={event.id}
                        className={'cta__button-container'}>
                        <CtaComponent eventId={event.id}/>
                      </div>
                    </div>
                  </EventItem>
                </div>
              })
            }
          </div>
        </div>
      })
    )
  }
}

export default EventsList;
