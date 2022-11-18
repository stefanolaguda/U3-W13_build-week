export class Invoice {
  id?: number;
  data?: string;
  numero?: number;
  anno?: number;
  importo?: number;
  stato?: string;
  cliente?: {
    id?: number;
  };
  dataInserimento?: Date;
  dataUltimaModifica?: Date;
}
