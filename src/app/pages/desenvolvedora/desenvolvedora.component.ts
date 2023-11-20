import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Desenvolvedora } from 'src/app/models/Desenvolvedora';
import { Observer } from 'rxjs';
import { DesenvolvedoraService } from 'src/app/desenvolvedora.service';

@Component({
  selector: 'app-desenvolvedora',
  templateUrl: './desenvolvedora.component.html',
  styleUrls: ['./desenvolvedora.component.scss']
})
export class DesenvolvedoraComponent {
  formCadastrar: any;
  formAlterar: any;
  formExcluir: any;
  formFiltrar: any;
  desenvolvedoras: Desenvolvedora[] = [];
  constructor(private desenvolvedoraService: DesenvolvedoraService) {}
  ngOnInit(): void {
    this.formCadastrar = new FormGroup({
      nome: new FormControl(null),
      porte: new FormControl(null),
    });
    this.formAlterar = new FormGroup({
      selectDesenvolvedora: new FormControl(null),
      nome: new FormControl(null),
      porte: new FormControl(null),
    });
    this.formExcluir = new FormGroup({
      selectDesenvolvedora: new FormControl(null),
    });
    this.formFiltrar = new FormGroup({
    });
    this.listar();
  }

  cadastro() {
    const desenvolvedora: Desenvolvedora = this.formCadastrar.value;
    const observer: Observer<Desenvolvedora> = {
      next(_result): void {
        alert('Desenvolvedora criada com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {},
    };
    this.desenvolvedoraService.cadastrar(desenvolvedora).subscribe(observer)
  }

  listar(): void{
    this.desenvolvedoraService.listar().subscribe((res)=>{console.log(res)})
  }
}