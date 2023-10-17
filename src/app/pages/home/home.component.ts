import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const carousel = document.getElementById('carouselExampleCaptions');
    const backgroundDiv = document.querySelector('.carousel-background') as HTMLElement;

    if (carousel && backgroundDiv) {
      carousel.addEventListener('slid.bs.carousel', () => {
        const activeSlide = document.querySelector('.carousel-item.active img');
        if (activeSlide) {
          const imageURL = window.getComputedStyle(activeSlide).getPropertyValue('background-image');
          backgroundDiv.style.backgroundImage = imageURL;
        }
      });
    }
  }

}
