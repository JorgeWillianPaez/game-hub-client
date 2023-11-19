export class Usuario {
  id?: number;
  nomeUsuario?: string;
  email?: string;
  dataNascimento?: string;
  senha?: string;
  status?: string = 'offline';
  usuarioAtivado?: boolean = true;
}
