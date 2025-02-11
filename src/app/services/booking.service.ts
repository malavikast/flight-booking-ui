import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:8084/bookings';

  constructor(private http: HttpClient) { }

  createBooking(uid: number, fid: number): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}?uid=${uid}&fid=${fid}`, {});
  }

  getBookingById(bookingId: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${bookingId}`);
  }

  getBookingsByUserId(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/user/${userId}`);
  }

  // constructor() { }
}
