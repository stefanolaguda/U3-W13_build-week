import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/classes/client';
import { Invoice } from 'src/app/classes/invoices'
import { InvoiceService } from 'src/app/services/invoice.service';


@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {

  @Input() currentClient?: Client;
  @ViewChild('f') form!: NgForm;
  


  invoiceList?: Invoice[]
   
  currentInvoice?: Invoice;


  constructor(private invoiceServ: InvoiceService) { }

  ngOnInit(): void {
    this.refreshInvoiceList();

  }

  refreshInvoiceList(){
    let currentId = this.currentClient?.id

    console.log(this.currentClient?.id, currentId )
    this.invoiceServ.getInvoice().subscribe((data) => {
      this.invoiceList = data.filter(invoice => invoice.cliente?.id === currentId)
      // this.invoiceList = data;
    });
    console.log('refreshed invoice list' )
  }

  onSubmit(){
    let now = new Date();

    console.log(this.form.value)

    this.currentInvoice = this.form.value

    // console.log(this.currentInvoice)

    this.currentInvoice = {
      ...this.currentInvoice,
      cliente: {
        id: this.form.value.cliente
      },
      dataInserimento : now,
      dataUltimaModifica: now,
    }

    console.log(this.currentInvoice)

    this.invoiceServ.addInvoice(this.currentInvoice).subscribe(() => {
      // console.log(data);
      this.refreshInvoiceList()
    });

    this.form.reset();

  }

}


