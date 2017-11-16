import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, RequestMethod,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerService {
  baseUrl: string = 'http://localhost:53811/api/Customer/GetAllCustomer';
  baseUrl1: string = 'http://localhost:53811/api/Customer/AddCustomer';
  baseUrl2: string = 'http://localhost:53811/api/Customer/DeleteCustomerById/';
  baseUrl3: string = 'http://localhost:53811/api/Customer/GetCustomerById/';
  

  constructor(private _http: Http) { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  }

  getCustomers() {
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:6590');
    return this._http.get(this.baseUrl)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  getCustomerById(id) {
    return this._http.get(this.baseUrl3 + id)
      .map((response: Response) => response.json())
      .catch(this._errorHandler)
  }

  saveCustomer(customer) {
    return this._http.post(this.baseUrl1, customer)
      .map((response: Response) => response.json())
      .catch(this._errorHandler)
  }

  deleteCustomer(id) {
  debugger;
    return this._http.delete(this.baseUrl2 + id)
      .map((response: Response) => response.json())
      .catch(this._errorHandler)
     
  }

  _errorHandler(error: Response) {
    debugger;
    console.log(error);
    return Observable.throw(error || "Internal server error");
  }
}
