import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
  providers: [MessageService],
})
export class PromocoesComponent {}
