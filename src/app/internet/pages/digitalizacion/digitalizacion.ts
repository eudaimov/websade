import { Component } from '@angular/core';
import {Bannerseccion} from "../../components/bannerseccion/bannerseccion";
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
