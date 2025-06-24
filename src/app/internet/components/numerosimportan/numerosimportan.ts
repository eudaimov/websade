import { Component } from '@angular/core';
import {Titulosection} from '../00 shared/titulosection/titulosection';
import {Contador} from '../00 shared/contador/contador';

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
