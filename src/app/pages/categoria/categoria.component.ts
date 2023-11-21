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
  categoriaSelecionada: Categoria = {
    nome: 'Nome da categoria',
    descricao: 'Descrição',
  };
  categoriaSelecionadaAlterada: Categoria = {};
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

  onChange(event: any): void {
    this.categoriaService.buscar(this.formAlterar.value.selectAlterar.id).subscribe(
      (res) => {
        this.categoriaSelecionadaAlterada = res;
        this.formAlterar.patchValue({
          nome: this.categoriaSelecionadaAlterada.nome,
          descricao: this.categoriaSelecionadaAlterada.descricao,
        })
      }
    )
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

  alterar(): void {
    const categoria: Categoria = {
      id: this.formAlterar.value.selectAlterar.id,
      nome: this.formAlterar.value.nome,
      descricao: this.formAlterar.value.descricao,
    };
    this.categoriaService.alterar(categoria).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Categoria alterada com sucesso!',
        });
        this.listar();
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao alterar categoria',
        });
      }
    )
  }

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
