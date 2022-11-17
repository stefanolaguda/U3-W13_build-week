export class Client {
  id?: number | undefined;
  ragioneSociale?: string;
  partitaIva?: number;
  tipoCliente?: string;
  email?: string;
  pec?: string;
  tel?: string;
  nameContact?: string;
  lastnameContact?: string;
  telContatto?: number;
  emailContact?: string;
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
