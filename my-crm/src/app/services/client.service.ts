import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private client: Client[] = [];

  constructor(private http: HttpClient) {}

  getClient() {
    return this.http.get<Client[]>(environment.urlAPI + 'clients');
  }

  // changeDetailsInfo(id: number) {
  //   return this.http.patch<Client>(environment.urlAPI + 'client', id);
  // }

  addClient(clientObj: Client | undefined) {
    return this.http.post<Client>(environment.urlAPI + 'clients', clientObj);
  }
}
