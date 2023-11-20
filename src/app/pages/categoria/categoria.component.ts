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
  formulario: any;
  constructor(private categoriaService: CategoriaService) {}
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      descricao: new FormControl(null),
    });
  }

  cadastro() {
    const categoria: Categoria = this.formulario.value;
    const observer: Observer<Categoria> = {
      next(_result): void {
        alert('Categoria criada com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {},
    };
    this.categoriaService.cadastrar(categoria).subscribe(observer);
  }
}
