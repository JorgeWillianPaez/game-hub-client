import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/models/Categoria';
import { Noticia } from 'src/app/models/Noticia';
import { NoticiasService } from 'src/app/noticias.service';
import { CategoriaService } from 'src/app/categoria.service';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-modal-criar-noticia',
  templateUrl: './modal-criar-noticia.component.html',
  styleUrls: ['./modal-criar-noticia.component.scss'],
  providers: [MessageService],
})
export class ModalCriarNoticiaComponent {
  formCadastrar!: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private noticiaService: NoticiasService,
    private messageService: MessageService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.formCadastrar = new FormGroup({
      titulo: new FormControl(null),
      descricao: new FormControl(null),
      categorias: new FormControl(null),
    });
    this.listarCategorias();
  }

  listarCategorias(): void {
    this.categoriaService.listar().subscribe((res) => {
      this.categorias = res;
    });
  }

  cadastro(): void {
    const noticia: Noticia = this.formCadastrar.value;
    const usuarioId = localStorage.getItem('usuarioId');

    if (usuarioId != null) {
      noticia.usuarioId = parseInt(usuarioId);

      this.usuarioService.buscar(parseInt(usuarioId)).subscribe((res) => {
        noticia.categoriaId = parseInt(this.formCadastrar.value.categorias.id);
        noticia.dataPublicacao = new Date().toDateString();

        this.noticiaService.cadastrar(noticia).subscribe(
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
      });
    }
  }
}
