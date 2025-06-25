import { Component } from '@angular/core';
import {PortadaSeccionComponent} from "../../components/00 shared/portada-seccion/portada-seccion.component";
import {Origenes} from '../../components/origenes/origenes';
import {Filosofia} from '../../components/filosofia/filosofia';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {Alianzas} from '../../components/alianzas/alianzas';
import {Equiposade} from '../../components/equiposade/equiposade';

@Component({
  selector: 'app-conocenos-home-page',
  imports: [
    PortadaSeccionComponent,
    Origenes,
    Filosofia,
    Buscamostalento,
    Alianzas,
    Equiposade
  ],
  templateUrl: './conocenos.html',
  styleUrl: './conocenos.css'
})
export class Conocenos {

}
