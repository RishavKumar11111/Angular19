import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = 'Rishav';
  rollNo: number = 100;
  isActive: boolean = true;
  currentData: Date = new Date();
  myPlaceHolder: string = 'Enter Full Name';
  div1ClassName: string = 'bg-primary';
  div1Style: string = 'height: 100px; width: 100px;';
  selectedCity: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);

    // this.showWelcomeMessage();
  }

  showWelcomeMessage() {
    if (typeof window !== 'undefined' && isPlatformBrowser(this.platformId)) {
      alert('Welcome to Angular 19 Tutorial');
    } else {
      console.log('This feature is only available in the browser environment and showWelcomeMessage is skipped in SSR.');
    }
  }

  onCityChange() {
    console.log('City Changed');
  }

}
