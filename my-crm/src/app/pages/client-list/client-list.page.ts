import { Component, OnInit, ViewChild } from '@angular/core';
import { Address, Client, Comune } from 'src/app/classes/client';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';

@Component({
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {
  @ViewChild('f') form!: NgForm;

  clientList?: Client[];
  currentClient?: Client;
  currentAddress?: Address;
  currentComune?: Comune;

  addressGroup!: FormGroup;
  comuneGroup!: FormGroup;

  constructor(private clientServ: ClientService, private fb: FormBuilder) {}

  ngOnInit() {
    this.clientServ.getClient().subscribe((data) => {
      this.clientList = data;
    });

    this.addressGroup = new FormGroup({
      via: new FormControl(),
      civico: new FormControl(),
      cap: new FormControl(),
    });

    this.comuneGroup = new FormGroup({
      nome: new FormControl(),
      provincia: new FormControl(),
    });
  }

  onSubmit() {
    console.log('onSubmit attivato');
    let now = new Date();

    this.currentClient = this.form.value;
    this.currentAddress = this.addressGroup.value;
    this.currentComune = this.comuneGroup.value;

    this.currentAddress = {
      ...this.currentAddress,
      comune: this.currentComune,
    };

    this.currentClient = {
      ...this.currentClient,
      indirizzoSede: this.currentAddress,
      dataInserimento: `${now.toLocaleString()}`,
    };

    console.log(this.currentClient);

    this.clientServ.addClient(this.currentClient).subscribe((data) => {
      // console.log(data);
    });

    this.comuneGroup.reset();
    this.addressGroup.reset();
    this.form.reset();
  }



}
