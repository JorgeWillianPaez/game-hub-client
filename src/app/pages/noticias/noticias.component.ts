import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { ModalCriarNoticiaComponent } from '../../components/modal-criar-noticia/modal-criar-noticia.component';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from 'src/app/models/Noticia';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
  providers: [MessageService],
})
export class NoticiasComponent {
  noticias: Noticia[] = [];

  constructor(
    public dialog: MatDialog,
    private noticiaService: NoticiasService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listarNoticias(noticias: Noticia[]) {
    this.noticias = noticias;
  }

  abrirModalCriacaoNoticia() {
    const dialogRef = this.dialog.open(ModalCriarNoticiaComponent, {
      width: '600px',
      disableClose: true,
    });
  }

  listar(): void {
    this.noticiaService.listar().subscribe((res) => {
      this.noticias = res;
      this.formatarDatas();
    });
  }

  formatarDatas(): void {
    this.noticias.forEach((noticia) => {
      if (noticia.dataPublicacao) {
        noticia.dataPublicacao = this.datePipe
          .transform(noticia.dataPublicacao, 'dd/MM/yyyy HH:mm:ss')
          ?.toString();
      } else {
        noticia.dataPublicacao = 'Data não disponível';
      }
    });
  }
}
