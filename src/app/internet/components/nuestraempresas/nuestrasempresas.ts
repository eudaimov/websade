import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA,  signal} from '@angular/core';
// import function to register Swiper custom elements
import {register, SwiperContainer} from 'swiper/element/bundle';
import {SwiperOptions} from 'swiper/types';
import {Titulosection} from '../00 shared/titulosection/titulosection';
// register Swiper custom elements
register();

@Component({
  selector: 'nuestras-empresas',
  standalone: true,
  imports: [ ],
  templateUrl: './nuestrasempresas.html',
  styleUrl: './nuestrasempresas.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Nuestrasempresas implements AfterViewInit{
  swiperElement = signal<SwiperContainer | null>(null)
  ngAfterViewInit(): void {

      const swiperElementConstructor = document.querySelector('#nuestrasEmpresas');
      const swiperOption : SwiperOptions = {
        enabled:true,
        effect:"slide",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        slidesPerView:1,
        breakpoints:{
          640:{
            slidesPerView:1,
            spaceBetween: 20
          },
          800:{
            slidesPerView:2,
            spaceBetween: 20
          },
          992:{
            slidesPerView:3,
            spaceBetween: 20
          },
          1100:{
            slidesPerView:4,
            spaceBetween: 20
          },
          1400:{
            slidesPerView:5,
            spaceBetween: 20
          }

        }
      }
      Object.assign(swiperElementConstructor!, swiperOption);
      this.swiperElement.set((swiperElementConstructor as SwiperContainer))
      this.swiperElement()?.initialize()

    }

}
