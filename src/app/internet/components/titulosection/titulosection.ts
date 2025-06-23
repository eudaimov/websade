import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-titulo-section',
  imports: [],
  templateUrl: './titulosection.html',
  styleUrl: './titulosection.css'
})
export class Titulosection {
  @Input({required:true})
  titulo = ''

}
