import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-flights',
  imports: [NgIf, NgFor],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss'
})
export class FlightsComponent implements OnInit {

  flights: Flight[] = [];  // Store flights fetched from API
  isLoading = true;        // Show loading indicator while fetching data

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    // Fetch all flights when component is initialized
    this.flightService.getAllFlights().subscribe({
      next: (data) => {
        this.flights = data;  // Assign the fetched flights to the flights array
        this.isLoading = false;  // Stop loading indicator
      },
      error: (err) => {
        console.error('Error fetching flights:', err);
        this.isLoading = false;
      }
    });
  }
}
