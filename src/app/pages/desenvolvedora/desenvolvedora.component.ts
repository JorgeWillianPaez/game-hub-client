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
  formulario: any;
  constructor(private desenvolvedoraService: DesenvolvedoraService) {}
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      porte: new FormControl(null),
    });
  }

  cadastro() {
    const desenvolvedora: Desenvolvedora = this.formulario.value;
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
}