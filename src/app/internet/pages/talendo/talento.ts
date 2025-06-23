import { Component } from '@angular/core';
import {PortadaSeccionComponent} from '../../components/portada-seccion/portada-seccion.component';
import {Quebuscamos} from '../../components/quebuscamos/quebuscamos';
import {Quebuscamoscard} from '../../components/quebuscamoscard/quebuscamoscard';
import {EnvianosCurriculumBanner} from '../../components/envianosCurriculumBanner/envianosCurriculumBanner';

@Component({
  selector: 'app-talendo-page',
  imports: [
    PortadaSeccionComponent,
    Quebuscamos,
    Quebuscamoscard,
    EnvianosCurriculumBanner
  ],
  templateUrl: './talento.html',
  styleUrl: './talento.css'
})
export class Talento {

}
