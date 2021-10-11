import { Event } from '../models/event.model';
import ApiService from './api.service';
import * as _ from 'lodash';

export default class EventsService {
  private apiService: ApiService<Event[]>;

  constructor() {
    this.apiService = new ApiService()
  }

  getAllEvents(): Promise<Event[]> {
    return this.apiService.get()
  }

  getMyEvents(): Promise<number[]> {
    return this.apiService.getFromLocalStorage('myEvents');
  }

  cancelAttendance(eventId: any): Promise<number[]> {
    const currentEventsIds: number[] = JSON.parse(localStorage.getItem('myEvents') || '[]') || [];
    const events: number[] = _.filter(currentEventsIds, (n) => n !== eventId);

    return this.apiService.store('myEvents', events);
  }

  signUpToEvent(eventId: any) {
    return new Promise((resolve, reject) => {
      const currentEventsIds: number[] = JSON.parse(localStorage.getItem('myEvents') || '[]') || [];
      const notSignedUp: boolean = !(currentEventsIds.indexOf(eventId) > -1);

      if (notSignedUp) {
        return resolve(this.apiService.store('myEvents', [...currentEventsIds, eventId]))
      }
      return reject('Existing id');
    })
  }
}
