import { Component } from '@angular/core';
import {Bannerseccion} from "../../components/bannerseccion/bannerseccion";
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';

@Component({
  selector: 'app-tdiferenciales-page',
  imports: [
    Bannerseccion,
    Buscamostalento
  ],
  templateUrl: './tdiferenciales.html',
  styleUrl: './tdiferenciales.css'
})
export class Tdiferenciales {

}
