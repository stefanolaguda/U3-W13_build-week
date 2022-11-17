export class Client {
  id?: number | undefined;
  ragioneSociale?: string;
  partitaIva?: number;
  tipoCliente?: string;
  email?: string;
  pec?: string;
  telefono?: string;
  nomeContatto?: string;
  cognomeContatto?: string;
  telefonoContatto?: number;
  emailContatto?: string;
  indirizzoSede?: Address;
  dataInserimento?: string;
}

export class Address {
  via?: string;
  civico?: string;
  cap?: number;
  comune?: Comune;
}

export class Comune {
  nome?: string;
  provincia?: string;
}
