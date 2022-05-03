import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerInterface } from '../models/customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  //.

  getComments() {
    return this.http.get<CustomerInterface[]>(
      'https://jsonplaceholder.typicode.com/comments?postId=1'
    );
  }

  constructor(private http: HttpClient) {}
}
