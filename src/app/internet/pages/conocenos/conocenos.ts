import { Component } from '@angular/core';
import {PortadaSeccionComponent} from "../../components/portada-seccion/portada-seccion.component";
import {Origenes} from '../../components/origenes/origenes';
import {Filosofia} from '../../components/filosofia/filosofia';

@Component({
  selector: 'app-conocenos-home-page',
  imports: [
    PortadaSeccionComponent,
    Origenes,
    Filosofia
  ],
  templateUrl: './conocenos.html',
  styleUrl: './conocenos.css'
})
export class Conocenos {

}
