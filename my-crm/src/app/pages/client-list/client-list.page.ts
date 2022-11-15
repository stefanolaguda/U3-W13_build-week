import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/classes/client';
import { ClientService } from 'src/app/services/client.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {
  @ViewChild('f') form!: NgForm;

  clientList?: Client[];
  currentClient?: Client;

  constructor(private clientServ: ClientService) {}

  ngOnInit() {
    this.clientServ.getClient().subscribe((data) => {
      this.clientList = data;
    });
  }

  onSubmit() {
    console.log(this.form.value);
    console.log('onSubmit attivato');

    this.currentClient = this.form.value;

    // this.currentClient!.id = 1;

    this.clientServ.addClient(this.currentClient).subscribe((data) => {
      console.log(data);
    });
  }
}
