import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  paymentDate: any;
  amount: any;
  distanceInMiles: number;

  onNameChange(target: any) {
    this.name = target.value;
  }

  onPaymentDateChange(target: any) {
    this.paymentDate = target.value;
  }

  onAmountChange(target: any) {
    this.amount = target.value;
  }

  onDistanceChange(target: any) {
    this.distanceInMiles = parseFloat(target.value);
  }
}
