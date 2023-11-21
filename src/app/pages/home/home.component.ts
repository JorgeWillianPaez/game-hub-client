import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Jogo } from 'src/app/models/Jogo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService],
})
export class HomeComponent {
  currentGame: Jogo = {
    preco: 0,
  };
  visible: boolean = false;
  logado: boolean = false;

  products: Jogo[] = [
    {
      id: 1,
      nome: "Marvel's Spider Man",
      imagem: '../../../assets/spider-man/capa_spider_man.jpg',
      descricao:
        "Em Marvel's Spider-Man Remasterizado, os mundos do Peter Parker e do Spider-Man colidem numa história repleta de ação. Encontra um Peter Parker experiente e combate o crime e os vilões icónicos da Nova Iorque da Marvel. Baloiça por bairros vibrantes e vence vilões com neutralizações épicas.",
      preco: 250,
    },
    {
      id: 2,
      nome: 'Phasmophobia',
      imagem: '../../../assets/phasmophobia/capa_phasmophobia.jpg',
      descricao:
        'Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.',
      preco: 70,
    },
    {
      id: 3,
      nome: 'The Witcher® 3: Wild Hunt',
      imagem: '../../../assets/the_witcher_III/capa_the_witcher_III.jpg',
      descricao:
        'És Geralt of Rivia, um mercenário caçador de monstros. Perante ti, encontras um continente destruído e infestado por monstros, que podes explorar como quiseres. O teu contrato: encontrar Ciri, a Criança da Profecia, uma arma viva capaz de alterar a forma do mundo.',
      preco: 80,
    },
    {
      id: 4,
      nome: 'Fifa 2023',
      imagem: '../../../assets/fifa/capa_fifa.jpg',
      descricao:
        'O FIFA 23 leva o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2, FIFA World Cup™ masculina e feminina, clubes femininos, recursos de crossplay** e muito mais.',
      preco: 500,
    },
    {
      id: 5,
      nome: 'Starfield',
      imagem: '../../../assets/starfield/capa_starfield.jpg',
      descricao:
        'Starfield é o primeiro universo novo em 25 anos da Bethesda Game Studios, os premiados criadores de The Elder Scrolls V: Skyrim e Fallout 4.',
      preco: 250,
    },
    {
      id: 6,
      nome: "Baldur's Gate 3",
      imagem: '../../../assets/baldurs_gate_III/capa_baldurs_gate_3.webp',
      descricao:
        'Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
      preco: 200,
    },
    {
      id: 7,
      nome: 'Forza Motorsport',
      imagem: '../../../assets/forza/capa_forza.webp',
      descricao:
        'Supere a concorrência na nova carreira. Corra com seus amigos em eventos multijogador julgados. Compita em mais de 500 carros em pistas mundialmente famosas com IA de ponta, física avançada e estratégia de pneus e combustível.',
      preco: 200,
    },
  ];

  lancamentos: Jogo[] = [
    {
      id: 13,
      nome: "Marvel's Spider Man",
      imagem: '../../../assets/spider-man/capa_spider_man.jpg',
      descricao:
        "Em Marvel's Spider-Man Remasterizado, os mundos do Peter Parker e do Spider-Man colidem numa história repleta de ação. Encontra um Peter Parker experiente e combate o crime e os vilões icónicos da Nova Iorque da Marvel. Baloiça por bairros vibrantes e vence vilões com neutralizações épicas.",
      preco: 250,
    },
    {
      id: 14,
      nome: 'The Last of Us',
      imagem: '../../../assets/the_last_of_us/capa_the_last_of_us.jpg',
      descricao:
        'Joel, um sobrevivente duro e cínico, e a jovem e impetuosa Ellie se conectam pela dificuldade do mundo em que vivem. Juntos, eles enfrentam circunstâncias brutais e monstros impiedosos durante uma difícil jornada pelos EUA após um surto apocalíptico.',
      preco: 250,
    },
    {
      id: 15,
      nome: 'Phasmophobia',
      imagem: '../../../assets/phasmophobia/capa_phasmophobia.jpg',
      descricao:
        'Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.',
      preco: 80,
    },
    {
      id: 16,
      nome: 'Forza Motorsport',
      imagem: '../../../assets/forza/capa_forza.webp',
      descricao:
        'Supere a concorrência na nova carreira. Corra com seus amigos em eventos multijogador julgados. Compita em mais de 500 carros em pistas mundialmente famosas com IA de ponta, física avançada e estratégia de pneus e combustível.',
      preco: 250,
    },
  ];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    const logado = localStorage.getItem('usuarioId');
    if (logado) {
      this.logado = true;
    } else {
      this.logado = false;
    }
  }

  showDialog(id: number) {
    this.currentGame = this.products.filter((jogo) => jogo.id == id)[0];
    if (this.currentGame == null) {
      this.currentGame = this.lancamentos.filter((jogo) => jogo.id == id)[0];
    }
    this.visible = true;
  }

  adicionarJogo(): void {
    console.log(this.currentGame);
  }
}
