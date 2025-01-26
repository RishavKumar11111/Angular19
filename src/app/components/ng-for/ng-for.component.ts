import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ['Bhubaneswar', 'Hyderabad', 'Kolkata', 'Bangalore', 'Delhi'];

  employeeArray: any[] = [
    { empId: 111, name: 'AAA', city: 'Bhubaneswar', contactNo: 9999999999 },
    { empId: 222, name: 'BBB', city: 'Hyderabad', contactNo: 8888888888 },
    { empId: 333, name: 'CCC', city: 'Kolkata', contactNo: 7777777777 },
    { empId: 444, name: 'DDD', city: 'Bangalore', contactNo: 6666666666 },
    { empId: 555, name: 'EEE', city: 'Delhi', contactNo: 5555555555 }
  ]

}
