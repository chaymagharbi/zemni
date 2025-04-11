import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  adminMode = false;
  searchTerm = '';

  @Output() adminModeChanged = new EventEmitter<boolean>();
  @Output() searchEvent = new EventEmitter<string>();

  toggleAdminMode() {
    this.adminMode = !this.adminMode;
    this.adminModeChanged.emit(this.adminMode);
  }

  onSearchChange() {
    this.searchEvent.emit(this.searchTerm);
  }
}
