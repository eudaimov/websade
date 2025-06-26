import { Component } from '@angular/core';
import {PortadaSeccionComponent} from '../../components/00 shared/portada-seccion/portada-seccion.component';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {Contactanos} from '../../components/contactanos/contactanos';
import {Planrecuperacion} from '../../components/planrecuperacion/planrecuperacion';
import {Mapacontacto} from '../../components/mapacontacto/mapacontacto';

@Component({
  selector: 'ContactanosPage',
  imports: [
    PortadaSeccionComponent,
    Buscamostalento,
    Contactanos,
    Planrecuperacion,
    Mapacontacto,
  ],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class ContactanosPage {

}
