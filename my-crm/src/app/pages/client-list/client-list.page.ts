import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/classes/client';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {
  @ViewChild('f') form!: NgForm;

  clientList?: Client[];
  currentClient?: Client;
  addressGroup!: FormGroup;
  comuneFroup!: FormGroup;

  constructor(private clientServ: ClientService, private fb: FormBuilder) {}

  ngOnInit() {
    this.clientServ.getClient().subscribe((data) => {
      this.clientList = data;
    });

    this.addressGroup = new FormGroup({
      via: new FormControl(),
      age: new FormControl(),
      cap: new FormControl(),
    });

    // this.addressGroup = this.fb.group(
    //   via: [],
    //   civico: [],
    //   cap: []
    // )
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
