import { Component } from '@angular/core';
import {Titulosection} from '../titulosection/titulosection';
import {Contador} from '../contador/contador';

@Component({
  selector: 'numeros-importan',
  imports: [
    Titulosection,
    Contador
  ],
  templateUrl: './numerosimportan.html',
  styleUrl: './numerosimportan.css'
})
export class Numerosimportan {

}
