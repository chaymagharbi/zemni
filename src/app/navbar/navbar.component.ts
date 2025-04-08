import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() adminModeChanged = new EventEmitter<boolean>();
  adminMode = false;

  toggleAdminMode() {
    this.adminMode = !this.adminMode;
    this.adminModeChanged.emit(this.adminMode);
  }
}
