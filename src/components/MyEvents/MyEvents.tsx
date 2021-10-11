import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Event } from '../../models/event.model';
import EventsService from '../../services/events.service';
import CancelAttendanceBtn from '../CancelAttendanceBtn/CancelAttendanceBtn';
import EventsList from '../EventsList/EventsList';
import './MyEvents.scss';

const mapStateToProps = (state: any) => {

  const filteredArr = _.filter(state.events.eventsList, (el) => {
    return state.events.myEventsIds.indexOf(el.id) > -1;
  });
  const groupedEvents: any = _.groupBy(
    filteredArr,
    (event: Event) => event.startDate.substr(0, event.startDate.indexOf('T'))
  );
  const sortedEvents: Event[] = _.sortBy(groupedEvents, (events: Event[]) => events[0].startDate);

  return {
    events: sortedEvents
  };
};

class MyEvents extends React.Component<any, any> {
  private eventsService: EventsService = new EventsService();

  constructor(props: any) {
    super(props);

    this.state = {
      grouppedEvents: []
    };
  }

  componentWillMount() {
    Promise.all([this.eventsService.getAllEvents(), this.eventsService.getMyEvents()]).then(
      (responses: any[]) => {
        this.props.dispatch({
          type: 'FETCH_MY_EVENTS_IDs_SUCCESS',
          events: responses[0],
          myEventsIds: responses[1]
        });
      });
  }

  render() {
    return (<div className={'page__container'}>
      <h1>
        My EVENTS
      </h1>

      <EventsList events={this.props.events} cta={CancelAttendanceBtn}> </EventsList>
    </div>)
  }
}

export default connect(mapStateToProps)(MyEvents);
