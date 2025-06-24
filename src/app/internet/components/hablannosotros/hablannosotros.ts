import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA,  signal} from '@angular/core';
// import function to register Swiper custom elements
import {register, SwiperContainer} from 'swiper/element/bundle';
import {SwiperOptions} from 'swiper/types';
import {Titulosection} from '../00 shared/titulosection/titulosection';
// register Swiper custom elements
register();

@Component({
  selector: 'app-hablan-nosotros',
  standalone: true,
  imports: [
    Titulosection
  ],
  templateUrl: './hablannosotros.html',
  styleUrl: './hablannosotros.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hablannosotros implements AfterViewInit{
  swiperElement = signal<SwiperContainer | null>(null)
  ngAfterViewInit(): void {

      const swiperElementConstructor = document.querySelector('swiper-container');
      const swiperOption : SwiperOptions = {
        enabled:true,
        effect:"slide",
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        loop: true,
        slidesPerView:1,
        pagination:  {
          enabled:true,
          clickable: true,
          type: "bullets",// La paginación suele ser un objeto para más opciones
          el: ".swiper-pagination", // Si tienes un elemento para la paginación en tu HTML
        },
        breakpoints:{
          640:{
            slidesPerView:1,
            spaceBetween: 20
          },
          1100:{
            slidesPerView:2,
            spaceBetween: 20
          }
        }
      }
      Object.assign(swiperElementConstructor!, swiperOption);
      this.swiperElement.set((swiperElementConstructor as SwiperContainer))
      this.swiperElement()?.initialize()

    }

}
