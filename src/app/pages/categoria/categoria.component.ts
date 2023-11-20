import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/models/Categoria';
import { Observer } from 'rxjs';
import { CategoriaService } from 'src/app/categoria.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [MessageService],
})
export class CategoriaComponent {
  formCadastrar: any;
  formAlterar: any;
  formExcluir: any;
  formBuscar: any;
  categorias: Categoria[] = [];
  categoriaSelecionada: Categoria = {};
  constructor(
    private categoriaService: CategoriaService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.formCadastrar = new FormGroup({
      nome: new FormControl(null),
      descricao: new FormControl(null),
    });
    this.formAlterar = new FormGroup({
      selectAlterar: new FormControl(null),
      nome: new FormControl(null),
      descricao: new FormControl(null),
    });
    this.formExcluir = new FormGroup({
      selectExcluir: new FormControl(null),
    }),
    this.formBuscar = new FormGroup({
      categoriaId: new FormControl(null),
    })
    this.listar();
  }

  cadastro(): void {
    const categoria: Categoria = this.formCadastrar.value;
    this.categoriaService.cadastrar(categoria).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Categoria criada com sucesso!',
        });
        this.listar();
      },
      (err) => {
        if (err.status == 409) {
          this.messageService.add({
            severity: 'error',
            summary: 'Categoria já cadastrada',
          })
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao criar categoria',
          })
        }
      }
    );
  }

  listar(): void {
    this.categoriaService.listar().subscribe((res) => {
      this.categorias = res;
    });
  }

  excluir(): void {
    const categoria: Categoria = this.formExcluir.value.selectExcluir;
    this.categoriaService.excluir(categoria.id!).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Categoria excluída com sucesso!',
        });
        this.listar();
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao excluir desenvolvedora',
        });
      }
    );
  }

  alterar(): void {}

  buscar(): void {
    const categoriaId: number = this.formBuscar.value.categoriaId;
    this.categoriaService.buscar(categoriaId).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Categoria encontrada!',
        });
        this.categoriaSelecionada = res;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao buscar categoria!',
        });
      }
    );
  }
}
