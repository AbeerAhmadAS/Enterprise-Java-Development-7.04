import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  copying(): void {
    alert('Tixt copied!.');
  }
  alertMessage() : void{
    alert('More information')
  }

}
