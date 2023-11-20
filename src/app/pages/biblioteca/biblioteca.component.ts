import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Jogo } from 'src/app/models/Jogo';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss'],
  providers: [MessageService],
})
export class BibliotecaComponent {
  constructor() {}
}
