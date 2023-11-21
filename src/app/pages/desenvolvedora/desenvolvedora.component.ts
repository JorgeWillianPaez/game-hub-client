import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Desenvolvedora } from 'src/app/models/Desenvolvedora';
import { Observer } from 'rxjs';
import { DesenvolvedoraService } from 'src/app/desenvolvedora.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-desenvolvedora',
  templateUrl: './desenvolvedora.component.html',
  styleUrls: ['./desenvolvedora.component.scss'],
  providers: [MessageService],
})
export class DesenvolvedoraComponent {
  formCadastrar: any;
  formAlterar: any;
  formExcluir: any;
  formBuscar: any;
  desenvolvedoras: Desenvolvedora[] = [];
  desenvolvedoraSelecionada: Desenvolvedora = {
    nome: 'Nome da Desenvolvedora',
    porte: 'Porte',
  };
  desenvolvedoraSelecionadaAlterada: Desenvolvedora = {};
  constructor(
    private desenvolvedoraService: DesenvolvedoraService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.formCadastrar = new FormGroup({
      nome: new FormControl(null),
      porte: new FormControl(null),
    });
    this.formAlterar = new FormGroup({
      selectAlterar: new FormControl(null),
      nome: new FormControl(null),
      porte: new FormControl(null),
    });
    this.formExcluir = new FormGroup({
      selectExcluir: new FormControl(null),
    });
    this.formBuscar = new FormGroup({
      desenvolvedoraId: new FormControl(null),
    });
    this.listar();
  }

  onChange(event: any): void {
    this.desenvolvedoraService.buscar(this.formAlterar.value.selectAlterar.id).subscribe(
      (res) => {
        this.desenvolvedoraSelecionadaAlterada = res;
        this.formAlterar.patchValue({
          nome: this.desenvolvedoraSelecionadaAlterada.nome,
          porte: this.desenvolvedoraSelecionadaAlterada.porte,
       });
      }
    )
  }

  cadastro(): void {
    const desenvolvedora: Desenvolvedora = this.formCadastrar.value;
    this.desenvolvedoraService.cadastrar(desenvolvedora).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Desenvolvedora criada com sucesso!',
        });
        this.listar();
      },
      (err) => {
        if (err.status == 409) {
          this.messageService.add({
            severity: 'error',
            summary: 'Desenvolvedora já cadastrada',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao criar desenvolvedora',
          });
        }
      }
    );
  }

  listar(): void {
    this.desenvolvedoraService.listar().subscribe((res) => {
      this.desenvolvedoras = res;
    });
  }

  excluir(): void {
    const desenvolvedora: Desenvolvedora = this.formExcluir.value.selectExcluir;
    this.desenvolvedoraService.excluir(desenvolvedora.id!).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Desenvolvedora excluída com sucesso!',
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
    const desenvolvedora: Desenvolvedora = {
      id: this.formAlterar.value.selectAlterar.id,
      nome: this.formAlterar.value.nome,
      porte: this.formAlterar.value.porte,
    };
    this.desenvolvedoraService.alterar(desenvolvedora).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Desenvolvedora alterada com sucesso!',
        });
        this.listar();
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao alterar desenvolvedora',
        });
      }
    );
  }

  buscar(): void {
    const desenvolvedoraId: number = this.formBuscar.value.desenvolvedoraId;
    this.desenvolvedoraService.buscar(desenvolvedoraId).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Desenvolvedora encontrada!',
        });
        this.desenvolvedoraSelecionada = res;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao buscar desenvolvedora!',
        });
      }
    );
  }
}
