export class Client {
  id?: number;
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
  indirizzoSede?: {
    via?: string;
    civico?: string;
    cap?: number;
    comune?: {
      nome?: string;
      provincia?: string;
    };
  };
  dataInserimento?: string;
}
