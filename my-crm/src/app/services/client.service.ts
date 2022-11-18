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

  addClient(clientObj: Client | undefined) {
    return this.http.post<Client>(environment.urlAPI + 'clients', clientObj);
  }

  deleteClient(id: number) {
    let stringId = String(id)
    return this.http.delete<Client>(environment.urlAPI + 'clients/' + stringId);
  }

  getDetailClient(id: number | undefined) {
    return this.http.get<Client>(environment.urlAPI + 'clients/' + id);
  }

  // changeDetailsInfo(id: number) {
  //   return this.http.patch<Client>(environment.urlAPI + 'client', id);
  // }
}
