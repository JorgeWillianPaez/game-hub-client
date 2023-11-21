import { Categoria } from './Categoria';

export class Desenvolvedora {
  id?: number;
  nome?: string;
  porte?: string;
  categoriaId?: number | null;
  categoria?: Categoria;
}
