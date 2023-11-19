import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario';
import { Observer } from 'rxjs';
import { UsuarioService } from 'src/app/usuario.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  formulario: any;
  constructor(private usuarioService: UsuarioService) {}
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nomeUsuario: new FormControl(null),
      email: new FormControl(null),
      dataNascimento: new FormControl(null),
      senha: new FormControl(null),
      confirmarSenha: new FormControl(null),
    });
  }

  cadastro() {
    const usuario: Usuario = this.formulario.value;
    const observer: Observer<Usuario> = {
      next(_result): void {
        alert('Usuário criado com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {},
    };
    this.usuarioService.cadastrar(usuario).subscribe(observer);
  }
}
