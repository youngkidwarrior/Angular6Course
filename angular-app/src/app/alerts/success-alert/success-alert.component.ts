import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: 'success-alert.component.html',
  styleUrls: ['success-alert.component.css']
})
export class SuccessComponent {
  alertSucceed() {
    alert('You have succeeded');
  }
}
