import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight',
  imports: [FormsModule],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.scss'
})
export class FlightComponent {
  flightType: 'one-way' | 'return' = 'one-way';
  departureDate: string = '';
  returnDate: string = '';
  destination = '';

  bookFlight() {
  
    console.log('bookFlight');
    console.log('Flight Type:', this.flightType);
    console.log('Departure Date:', this.departureDate);
    console.log('Return Date:', this.returnDate);
    console.log('Destination:', this.destination);
    if (this.departureDate === "" || (this.flightType === 'return' && this.returnDate === "")) {
      alert('Please fill in all fields');
      return;
    }
    if (this.flightType === 'one-way') {
      // Handle one-way flight booking
      alert(`Booking one-way flight on ${this.departureDate}`);

    } else if (this.flightType === 'return') {
      // Handle return flight booking
      alert(`Booking return flight from ${this.departureDate} to ${this.returnDate}`);
    } else {
      alert('Pls select');
    }
  }
}
