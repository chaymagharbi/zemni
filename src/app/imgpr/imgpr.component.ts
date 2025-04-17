import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imgpr',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './imgpr.component.html',
  styleUrls: ['./imgpr.component.scss']
})
export class ImgprComponent {
  @Input() imageSrc: string = '';
  @Input() text: string = '';
}
