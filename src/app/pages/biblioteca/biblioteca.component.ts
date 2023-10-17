import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss'],
})
export class BibliotecaComponent {

  itens = [
    { nome: 'Nes 1', categoria: 'nes', imagem: './assets/3d_models/steam.svg' },
    { nome: 'Item 2', categoria: 'snes', imagem: './assets/3d_models/steam.svg' },
    { nome: 'Item 3', categoria: 'steam', imagem: './assets/3d_models/steam.svg' },
    // Adicione mais itens com diferentes categorias
  ];

  constructor() {
  }

  itensFiltrados = this.itens;
  categoriasAtivas: string[] = [];

  // filtroCategoria(categoria: string) {
  //   if (categoria === 'todos') {
  //     this.itensFiltrados = this.itens;
  //   } else {
  //     this.itensFiltrados = this.itens.filter(item => item.categoria === categoria);
  //   }
  // }

  // filtroCategoria(categoria: string) {
  //   if (this.categoriasAtivas.includes(categoria)) {
  //     // Se a categoria já estiver ativa, desativa-a
  //     this.categoriasAtivas = this.categoriasAtivas.filter(cat => cat !== categoria);
  //   } else {
  //     // Se a categoria não estiver ativa, ativa-a
  //     this.categoriasAtivas.push(categoria);
  //   }
    
  //   this.atualizarItensFiltrados();
  // }

  // atualizarItensFiltrados() {
  //   if (this.categoriasAtivas.length === 0) {
  //     // Se nenhuma categoria estiver ativa, exibe todos os itens
  //     this.itensFiltrados = this.itens;
  //   } else {
  //     // Filtra os itens com base nas categorias ativas
  //     this.itensFiltrados = this.itens.filter(item => this.categoriasAtivas.includes(item.categoria));
  //   }
  // }

  atualizarItensFiltrados() {
    if (this.categoriasAtivas.length === 0) {
      // Se nenhuma categoria estiver ativa, exibe todos os itens
      this.itensFiltrados = this.itens;
    } else {
      // Filtra os itens com base nas categorias ativas
      this.itensFiltrados = this.itens.filter(item => this.categoriasAtivas.includes(item.categoria));
    }
  }

}
