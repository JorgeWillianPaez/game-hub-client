import { Categoria } from './Categoria';
import { Usuario } from './Usuario';

export class Noticia {
  id?: number;
  titulo?: string;
  descricao?: string;
  dataPublicacao?: string;
  usuarioId?: number | null;
  usuario?: Usuario;
  categoriaId?: number | null;
  categoria?: Categoria;
}
