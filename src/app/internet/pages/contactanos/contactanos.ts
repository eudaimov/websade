import { Component } from '@angular/core';
import {PortadaSeccionComponent} from '../../components/portada-seccion/portada-seccion.component';
import {BannerTalento} from '../../components/banner-talento/banner-talento';

@Component({
  selector: 'app-contactanos-page',
  imports: [
    PortadaSeccionComponent,
    BannerTalento
  ],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class Contactanos {

}
