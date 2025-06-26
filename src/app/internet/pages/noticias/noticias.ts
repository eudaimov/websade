import { Component } from '@angular/core';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';

@Component({
  selector: 'app-noticias-page',
  imports: [
    Buscamostalento
  ],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class Noticias {

}
