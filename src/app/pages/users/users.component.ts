import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [NgFor, NgIf]
})
export class UsersComponent {

  users: User[] = [];  // Store users fetched from API
  isLoading = true;     // Show loading indicator while fetching data

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch all users when component is initialized
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;  // Assign the fetched users to the users array
        this.isLoading = false;  // Stop loading indicator
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.isLoading = false;
      }
    });
  }
}



