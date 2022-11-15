import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/classes/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss']
})
export class ClientListPage implements OnInit {

  clientList?: Client[];

  constructor(private clientServ: ClientService) { 
    
  }

  ngOnInit() {
    this.clientServ.getClient().subscribe(data => 
      {
        this.clientList = data
      }
      )
  }

  

}
