export interface Flight {
    id: number;
    flightNumber: string;
    departure: string;
    arrival: string;
    departureTime: string;  // You can change this type if needed
    arrivalTime: string;    // You can change this type if needed
    price: number;
    availableSeats: number;
}