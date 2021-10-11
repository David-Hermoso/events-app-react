import React from 'react';
import './CancelAttendanceBtn.scss';
import { connect } from 'react-redux';
import EventsService from '../../services/events.service';

class CancelAttendanceBtn extends React.Component<any, any> {
  eventsService: EventsService = new EventsService();

  constructor(props: any) {
    super(props);
  }

  render() {
    return (<div>
      <button className={'btn primary'} onClick={() => {
        this.eventsService.cancelAttendance(this.props.eventId);

        this.props.dispatch(
          {
            type: 'CANCEL_EVENT_ATTENDANCE',
            modalProps: {
              eventId: this.props.eventId
            }
          }
        )
      }}>
        Not attending
      </button>

    </div>)
  }
}

export default connect()(CancelAttendanceBtn)
