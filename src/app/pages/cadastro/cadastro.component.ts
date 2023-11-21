import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/usuario.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Biblioteca } from 'src/app/models/Biblioteca';
import { BibliotecaService } from 'src/app/biblioteca.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [MessageService],
})
export class CadastroComponent {
  formulario: any;
  constructor(
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private router: Router,
    private bibliotecaService: BibliotecaService
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nomeUsuario: new FormControl(null),
      email: new FormControl(null),
      dataNascimento: new FormControl(null),
      senha: new FormControl(null),
      confirmarSenha: new FormControl(null),
    });
  }

  criarBibliotecaPadrao(id: number): void {
    const biblioteca: Biblioteca = {
      nome: 'Biblioteca padrão',
      descricao: 'Biblioteca padrão',
      usuarioId: id,
    };

    this.bibliotecaService.cadastrar(biblioteca).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  cadastro() {
    const usuario: Usuario = this.formulario.value;

    if (this.formulario.value.senha != this.formulario.value.confirmarSenha) {
      this.messageService.add({
        severity: 'error',
        summary: 'Senhas não coincidem',
      });
    } else {
      this.usuarioService.cadastrar(usuario).subscribe(
        (res) => {
          this.criarBibliotecaPadrao(res.id);
        },
        (err) => {
          if (err.status == 409) {
            this.messageService.add({
              severity: 'error',
              summary: 'Usuário ou e-mail já existe',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro ao criar usuário',
            });
          }
        }
      );
    }
  }
}
