import {Component, Input} from '@angular/core';

@Component({
  selector: 'bannerseccion',
  imports: [],
  templateUrl: './bannerseccion.html',
  styleUrl: './bannerseccion.css',
  standalone: true
})
export class Bannerseccion {

  @Input()
  mainTitle:string= '';

  @Input()
  secondaryTitle:string= '';

  @Input()
  image:string= '';


}
