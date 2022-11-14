export class Invoices {
  id?: number;
  data?: string;
  numero?: number;
  anno?: number;
  importo?: number;
  stato?: string;
  cliente?: {
    id?: number;
  };
  dataInserimento?: number;
  dataUltimaModifica?: string;
}
