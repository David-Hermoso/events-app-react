import * as _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Event} from '../../models/event.model';
import EventsService from '../../services/events.service';
import EventsList from '../EventsList/EventsList';
import SignUpCTA from '../SignUpCta/SignUpCTA';
import './AllEvents.scss';
import {AllEventsState} from './AllEvents.state';

const mapStateToProps = (state: any) => {
  const groupedEvents: any = _.groupBy(
    state.events.eventsList,
    (event: Event) => event.startDate.substr(0, event.startDate.indexOf('T'))
  );
  const sortedEvents: Event[] = _.sortBy(groupedEvents, (events: Event[]) => events[0].startDate);

  return {
    events: sortedEvents
  };
};

class AllEvents extends React.Component<any, AllEventsState> {
  private eventsService: EventsService = new EventsService();

  constructor(props: any) {
    super(props);

    this.state = {
      grouppedEvents: []
    };
  }

  componentWillMount() {
    this.eventsService.getAllEvents().then(
      (events: Event[]) => {
        this.props.dispatch({
          type: 'FETCH_EVENTS_SUCCESS',
          events: events
        });
      });
  }

  render() {
    return (<div className={'page__container'}>
      <h1>
        ALL EVENTS
      </h1>

      <EventsList events={this.props.events} cta={SignUpCTA}> </EventsList>
    </div>)
  }
}

export default connect(mapStateToProps)(AllEvents);
