import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Invoice } from '../classes/invoices';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoice() {
    return this.http.get<Invoice[]>(environment.urlAPI + 'invoices');
  }

  addInvoice(invoiceObj: Invoice | undefined) {
    return this.http.post<Invoice>(environment.urlAPI + 'invoices', invoiceObj);
  }

  deleteInvoice(id: number) {
    return this.http.delete<Invoice>(environment.urlAPI + 'invoices/' + id);
  }

  getDetailInvoice(id: number | undefined) {
    return this.http.get<Invoice>(environment.urlAPI + 'invoices/' + id);
  }
}
