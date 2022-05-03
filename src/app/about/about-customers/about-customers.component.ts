import { Component, OnInit } from '@angular/core';
import { CustomerInterface } from 'src/app/models/customer.interface';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-about-customers',
  templateUrl: './about-customers.component.html',
  styleUrls: ['./about-customers.component.css'],
})
export class AboutCustomersComponent implements OnInit {
  //.
  customers: CustomerInterface[];
  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.customerService.getComments().subscribe((response) => {
      this.customers = response;
      console.log(this.customers);
    });
  }
}
