import { Component } from '@angular/core';
import {PortadaSeccionComponent} from '../../components/portada-seccion/portada-seccion.component';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';

@Component({
  selector: 'app-contactanos-page',
  imports: [
    PortadaSeccionComponent,
    Buscamostalento
  ],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class Contactanos {

}
