import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalCriarNoticiaComponent } from './modal-criar-noticia/modal-criar-noticia.component';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticias } from 'src/app/models/Noticias';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
  providers: [MessageService],
})
export class NoticiasComponent {

  noticias: Noticias[] = [];

  constructor(public dialog: MatDialog, private noticiaService: NoticiasService, 
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.listar();
  }

  abrirModalCriacaoNoticia() {
    const dialogRef = this.dialog.open(ModalCriarNoticiaComponent, {
      width: '600px',
      disableClose: true
    });
  }

  listar(): void {
    this.noticiaService.listar().subscribe((res) => {
      this.noticias = res;
      this.formatarDatas();
    });
  }

  formatarDatas(): void {
    this.noticias.forEach(noticia => {
      if (noticia.dataPublicacao) {
        noticia.dataCriacaoFormatada = this.datePipe.transform(noticia.dataPublicacao, 'dd/MM/yyyy HH:mm:ss');
      } else {
        noticia.dataCriacaoFormatada = 'Data não disponível';
      }
    });
  }
}
