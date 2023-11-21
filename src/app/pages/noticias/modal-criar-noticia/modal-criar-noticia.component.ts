import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Noticias } from 'src/app/models/Noticias';
import { NoticiasService } from 'src/app/noticias.service';

@Component({
  selector: 'app-modal-criar-noticia',
  templateUrl: './modal-criar-noticia.component.html',
  styleUrls: ['./modal-criar-noticia.component.scss'],
  providers: [MessageService],
})
export class ModalCriarNoticiaComponent {
  formCadastrar!: FormGroup;
  noticias: Noticias[] = [];

  constructor(
    private noticiaService: NoticiasService, private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.formCadastrar = new FormGroup({
      titulo: new FormControl(null),
      descricao: new FormControl(null),
    });
  }

  cadastro(): void {
    const noticia: Noticias = this.formCadastrar.value;
    noticia.dataPublicacao = new Date();

    this.noticiaService.cadastrar(noticia)
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notícia cadastrada com sucesso!',
          });
        },
        (err: HttpErrorResponse) => {
          if (err.status === 409) {
            this.messageService.add({
              severity: 'error',
              summary: 'Notícia já cadastrada',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro ao cadastrar notícia',
            });
          }
        }
      );
  }

}
