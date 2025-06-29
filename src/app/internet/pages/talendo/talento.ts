import { Component } from '@angular/core';
import {PortadaSeccionComponent} from '../../components/00 shared/portada-seccion/portada-seccion.component';
import {Quebuscamos} from '../../components/quebuscamos/quebuscamos';
import {Quebuscamoscard} from '../../components/quebuscamoscard/quebuscamoscard';
import {EnvianosCurriculumBanner} from '../../components/envianosCurriculumBanner/envianosCurriculumBanner';
import {EnvianosCV} from '../../components/envianos-cv/envianos-cv';

@Component({
  selector: 'app-talendo-page',
  imports: [
    PortadaSeccionComponent,
    Quebuscamos,
    Quebuscamoscard,
    EnvianosCurriculumBanner,
    EnvianosCV
  ],
  templateUrl: './talento.html',
  styleUrl: './talento.css'
})
export class Talento {

}
