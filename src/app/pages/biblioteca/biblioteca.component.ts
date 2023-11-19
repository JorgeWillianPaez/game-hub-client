import { Component } from '@angular/core';
import { Jogo } from 'src/app/models/Jogo';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss'],
})
export class BibliotecaComponent {
  constructor() {}

  jogos: Jogo[] = [
    {
      id: 1,
      nome: "Marvel's Spider Man",
      image: '../../../assets/spider-man/capa_spider_man.jpg',
      descricao:
        "Em Marvel's Spider-Man Remasterizado, os mundos do Peter Parker e do Spider-Man colidem numa história repleta de ação. Encontra um Peter Parker experiente e combate o crime e os vilões icónicos da Nova Iorque da Marvel. Baloiça por bairros vibrantes e vence vilões com neutralizações épicas.",
    },
    {
      id: 2,
      nome: 'Phasmophobia',
      image: '../../../assets/phasmophobia/capa_phasmophobia.jpg',
      descricao:
        'Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.',
    },
    {
      id: 3,
      nome: 'The Witcher® 3: Wild Hunt',
      image: '../../../assets/the_witcher_III/capa_the_witcher_III.jpg',
      descricao:
        'És Geralt of Rivia, um mercenário caçador de monstros. Perante ti, encontras um continente destruído e infestado por monstros, que podes explorar como quiseres. O teu contrato: encontrar Ciri, a Criança da Profecia, uma arma viva capaz de alterar a forma do mundo.',
    },
    {
      id: 4,
      nome: 'Fifa 2023',
      image: '../../../assets/fifa/capa_fifa.jpg',
      descricao:
        'O FIFA 23 leva o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2, FIFA World Cup™ masculina e feminina, clubes femininos, recursos de crossplay** e muito mais.',
    },
    {
      id: 5,
      nome: 'Starfield',
      image: '../../../assets/starfield/capa_starfield.jpg',
      descricao:
        'Starfield é o primeiro universo novo em 25 anos da Bethesda Game Studios, os premiados criadores de The Elder Scrolls V: Skyrim e Fallout 4.',
    },
    {
      id: 6,
      nome: "Baldur's Gate 3",
      image: '../../../assets/baldurs_gate_III/capa_baldurs_gate_3.webp',
      descricao:
        'Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
    },
    {
      id: 7,
      nome: 'Forza Motorsport',
      image: '../../../assets/forza/capa_forza.webp',
      descricao:
        'Supere a concorrência na nova carreira. Corra com seus amigos em eventos multijogador julgados. Compita em mais de 500 carros em pistas mundialmente famosas com IA de ponta, física avançada e estratégia de pneus e combustível.',
    },
  ];
}
