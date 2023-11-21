import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  formLogin: any;
  constructor(
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const logado = localStorage.getItem('usuarioId');
    if (logado) {
      this.router.navigate(['/home']);
    }

    this.formLogin = new FormGroup({
      usuarioEmail: new FormControl(null),
      senha: new FormControl(null),
    });
  }

  login(): void {
    const usuario: Usuario = {};
    usuario.email = this.formLogin.value.usuarioEmail;
    usuario.nomeUsuario = this.formLogin.value.usuarioEmail;
    usuario.senha = this.formLogin.value.senha;

    this.usuarioService.autenticacao(usuario).subscribe(
      (res) => {
        localStorage.setItem('usuarioId', res.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Login realizado com sucesso!',
        });
        this.router.navigate(['/home']);
      },
      (err) => {
        if (err.status == 409) {
          this.messageService.add({
            severity: 'error',
            summary: 'Senha incorreta!',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Usuário ou e-mail não encontrado!',
          });
        }
      }
    );
  }
}
