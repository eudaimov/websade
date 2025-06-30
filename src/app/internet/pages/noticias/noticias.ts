import { Component } from '@angular/core';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {NuestrasNoticias} from '../../components/nuestras-noticias/nuestras-noticias';

@Component({
  selector: 'app-noticias-page',
  imports: [
    Buscamostalento,
    NuestrasNoticias
  ],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class Noticias {

}
