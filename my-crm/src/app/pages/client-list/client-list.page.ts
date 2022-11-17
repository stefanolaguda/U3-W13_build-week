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

  currentDetailClient?: Client;

  addressGroup!: FormGroup;
  comuneGroup!: FormGroup;

  showDetailComponent: string = 'd-none';

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

    this.clientServ.getClient().subscribe((data) => {
      this.clientList = data;
    });
  }

  deleteClient(id: number | undefined) {
    console.log(id);
    console.log('Tasto delete Client', id);

    this.clientServ.deleteClient(id).subscribe();
    this.clientServ.getClient().subscribe((data) => {
      this.clientList = data;
    });
  }

  getDetailClient(id: number | undefined) {
    this.showDetailComponent = 'd-block';
    this.clientServ
      .getDetailClient(id)
      .subscribe((data) => (this.currentDetailClient = data));
  }

  renderEmptyDetail() {
    this.showDetailComponent = 'd-none';
  }
}
