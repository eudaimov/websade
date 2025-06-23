import { Component } from '@angular/core';
import {Bannerseccion} from '../../components/bannerseccion/bannerseccion';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';

@Component({
  selector: 'app-desarrollo-page',
  imports: [
    Bannerseccion,
    Buscamostalento
  ],
  templateUrl: './desarrollo.html',
  styleUrl: './desarrollo.css'
})
export class Desarrollo {

}
