import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Client } from 'src/app/classes/client';
import { Invoice } from 'src/app/classes/invoices'
import { InvoiceService } from 'src/app/services/invoice.service';


@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {

  @Input() currentClientId?: number;
  @ViewChild('f') form!: NgForm;
  


  invoiceList?: Invoice[]
   
  currentInvoice?: Invoice;


  constructor(private invoiceServ: InvoiceService) { }

  ngOnInit(): void {
    this.refreshInvoiceList();

  }

  ngOnChanges(){
    this.refreshInvoiceList();
    console.log('ciao')
  }

  refreshInvoiceList(){
    

    console.log(this.currentClientId )
    this.invoiceServ.getInvoice().subscribe((data) => {
      this.invoiceList = data.filter(invoice => invoice.cliente?.id === this.currentClientId)
      // this.invoiceList = data;
    });
    console.log(this.invoiceList)
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


