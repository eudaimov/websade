import {Component, Input} from '@angular/core';

@Component({
  selector: 'portada-seccion',
  imports: [],
  templateUrl: './portada-seccion.component.html',
  styleUrl: './portada-seccion.component.css',
  standalone: true
})
export class PortadaSeccionComponent {
  @Input({required: true})
  mainTitle:string = ''
  @Input({required:true})
  secondaryTitle:string = ''
  @Input({required:false})
  image:string = ''
}
