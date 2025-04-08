import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
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
