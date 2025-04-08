import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imgpr',
  templateUrl: './imgpr.component.html',
  styleUrls: ['./imgpr.component.scss']
})
export class ImgprComponent {
  @Input() imageSrc: string = '';
  @Input() text: string = '';
}
