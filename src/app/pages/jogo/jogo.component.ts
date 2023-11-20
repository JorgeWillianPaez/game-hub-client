import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';
import { Jogo } from 'src/app/models/Jogo';
import { JogoService } from 'src/app/jogo.service';
import { DesenvolvedoraService } from 'src/app/desenvolvedora.service';
import { Desenvolvedora } from 'src/app/models/Desenvolvedora';

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
  desenvolvedoras: Desenvolvedora[] = [];
  constructor(
    private jogoService: JogoService,
    private messageService: MessageService,
    private desenvolvedoraService: DesenvolvedoraService
  ) {}
  ngOnInit(): void {
    this.formCadastrar = new FormGroup({
      nome: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null),
      dataLancamento: new FormControl(null),
      plataforma: new FormControl(null),
      desenvolvedora: new FormControl(null),
    });
    this.formAlterar = new FormGroup({
      nome: new FormControl(null),
      descricao: new FormControl(null),
    });
    this.formExcluir = new FormGroup({
      selectExcluir: new FormControl(null),
    });
    this.formBuscar = new FormGroup({
      jogoId: new FormControl(null),
    });
    this.listar();
  }

  cadastro(): void {
    const jogo: Jogo = this.formCadastrar.value;
    this.jogoService.cadastrar(jogo).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Jogo criada com sucesso!',
        });
        this.listar();
      },
      (err) => {
        if (err.status == 409) {
          this.messageService.add({
            severity: 'error',
            summary: 'Jogo já cadastrada',
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
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao excluir jogo',
        });
      }
    );
  }

  alterar(): void {}

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
