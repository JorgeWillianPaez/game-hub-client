import { Categoria } from './Categoria';
import { Desenvolvedora } from './Desenvolvedora';

export class Jogo {
  id?: number;
  nome?: string;
  descricao?: string;
  preco?: number;
  imagem?: string;
  plataforma?: string;
  dataLancamento?: string;
  categoriaId?: number;
  categoria?: Categoria;
  desenvolvedoraId?: number;
  desenvolvedora?: Desenvolvedora;
}
