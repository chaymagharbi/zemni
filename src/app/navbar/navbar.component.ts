import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  @Output() adminModeChanged = new EventEmitter<boolean>();
  @Output() searchEvent = new EventEmitter<string>();

  toggleAdminMode() {
    this.adminMode = !this.adminMode;
    this.adminModeChanged.emit(this.adminMode);
  }

  onSearchChange() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/recherche'], {
        queryParams: { q: this.searchTerm.trim() }
      });
    }}
}
