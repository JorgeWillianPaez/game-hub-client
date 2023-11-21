import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';
import { Jogo } from 'src/app/models/Jogo';
import { JogoService } from 'src/app/jogo.service';
import { DesenvolvedoraService } from 'src/app/desenvolvedora.service';
import { Desenvolvedora } from 'src/app/models/Desenvolvedora';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/categoria.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss'],
  providers: [MessageService],
})
export class JogoComponent {
  formCadastrar: any;
  formAlterar: any;
  formExcluir: any;
  formBuscar: any;
  jogos: Jogo[] = [];
  jogoSelecionado: Jogo = {};
  jogoAlterado: Jogo = {};
  desenvolvedoras: Desenvolvedora[] = [];
  categorias: Categoria[] = [];
  constructor(
    private jogoService: JogoService,
    private messageService: MessageService,
    private desenvolvedoraService: DesenvolvedoraService,
    private categoriaService: CategoriaService
  ) {}
  ngOnInit(): void {
    this.formCadastrar = new FormGroup({
      nome: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null),
      dataLancamento: new FormControl(null),
      plataforma: new FormControl(null),
      desenvolvedoras: new FormControl(null),
      categorias: new FormControl(null),
    });
    this.formAlterar = new FormGroup({
      selectAlterar: new FormControl(null),
      nome: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null),
      plataforma: new FormControl(null),
    });
    this.formExcluir = new FormGroup({
      selectExcluir: new FormControl(null),
    });
    this.formBuscar = new FormGroup({
      jogoId: new FormControl(null),
    });
    this.listar();
    this.listarDesenvolvedoras();
    this.listarCategorias();
  }

  onChange(event: any): void {
    this.jogoService
      .buscar(this.formAlterar.value.selectAlterar.id)
      .subscribe((res) => {
        this.jogoAlterado = res;
        this.formAlterar.patchValue({
          nome: this.jogoAlterado.nome,
          descricao: this.jogoAlterado.descricao,
          preco: this.jogoAlterado.preco,
          plataforma: this.jogoAlterado.plataforma,
        });
      });
  }

  cadastro(): void {
    const jogo: Jogo = this.formCadastrar.value;
    jogo.preco = parseFloat(this.formCadastrar.value.preco);
    jogo.desenvolvedoraId = this.formCadastrar.value.desenvolvedoras.id;
    jogo.categoriaId = this.formCadastrar.value.categorias.id;
    this.jogoService.cadastrar(jogo).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Jogo criado com sucesso!',
        });
        this.listar();
      },
      (err) => {
        if (err.status == 409) {
          this.messageService.add({
            severity: 'error',
            summary: 'Jogo já cadastrado',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao criar jogo',
          });
        }
      }
    );
  }

  listarDesenvolvedoras(): void {
    this.desenvolvedoraService.listar().subscribe((res) => {
      this.desenvolvedoras = res;
    });
  }

  listarCategorias(): void {
    this.categoriaService.listar().subscribe((res) => {
      this.categorias = res;
    });
  }

  listar(): void {
    this.jogoService.listar().subscribe((res) => {
      this.jogos = res;
    });
  }

  excluir(): void {
    const jogo: Jogo = this.formExcluir.value.selectExcluir;
    this.jogoService.excluir(jogo.id!).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Jogo excluída com sucesso!',
        });
        this.listar();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao excluir jogo',
        });
      }
    );
  }

  alterar(): void {
    const jogo: Jogo = {
      id: this.jogoAlterado.id,
      nome: this.formAlterar.value.nome,
      descricao: this.formAlterar.value.descricao,
      preco: this.formAlterar.value.preco,
      plataforma: this.formAlterar.value.plataforma,
      dataLancamento: this.jogoAlterado.dataLancamento,
      categoriaId: this.jogoAlterado.categoriaId,
      desenvolvedoraId: this.jogoAlterado.desenvolvedoraId,
    };
    this.jogoService.alterar(jogo).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Jogo alterado com sucesso!',
        });
        this.listar();
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao alterar jogo',
        });
      }
    );
  }

  buscar(): void {
    const jogoId: number = this.formBuscar.value.jogoId;
    this.jogoService.buscar(jogoId).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Jogo encontrada!',
        });
        this.jogoSelecionado = res;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao buscar jogo!',
        });
      }
    );
  }
}
