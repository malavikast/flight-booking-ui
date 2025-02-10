import { Flight } from "./flight.model";
import { User } from "./user.model";

export interface Booking {
    // id: number;
    // userId: number;
    // flightId: number;
    // status: string; // e.g., 'Booked', 'Cancelled'
    // createdAt: string; // ISO date string
    // updatedAt: string; // ISO date string

    id: number;
    user: User;  // Define user as an object of type User
    flight: Flight;  // Define flight as an object of type Flight
    status: string;
    createdAt: string;
    updatedAt: string;
}
