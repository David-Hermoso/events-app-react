import * as _ from 'lodash';
import { Event } from '../../models/event.model';

const initialState = {
  eventsList: [],
  myEventsIds: []
};

// TODO: Type of action and type of state and default state
const events = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS':
      return {
        ...state,
        eventsList: action.events
      };

    case 'FETCH_MY_EVENTS_IDs_SUCCESS':
      return {
        ...state,
        eventsList: action.events,
        myEventsIds: action.myEventsIds
      };
    case 'CANCEL_EVENT_ATTENDANCE':
      const events: Event[] = _.filter(state.eventsList, (el) => {
        return el.id !== action.eventId;
      });

      return {
        ...state,
        eventsList: events
      };
    default:
      return state;
  }
};

export default events;



