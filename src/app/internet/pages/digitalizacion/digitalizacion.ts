import { Component } from '@angular/core';
import {Bannerseccion} from "../../components/00 shared/bannerseccion/bannerseccion";
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';

@Component({
  selector: 'app-digitalizacion-page',
  imports: [
    Bannerseccion,
    Buscamostalento
  ],
  templateUrl: './digitalizacion.html',
  styleUrl: './digitalizacion.css'
})
export class Digitalizacion {

}
