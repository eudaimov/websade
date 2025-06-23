import { Component } from '@angular/core';
import {Colorcomponent} from '../../components/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {Bannerseccion} from '../../components/bannerseccion/bannerseccion';

@Component({
  selector: 'app-consultoria-page',
  imports: [
    Colorcomponent,
    Bannerseccion
  ],
  templateUrl: './consultoria.html',
  styleUrl: './consultoria.css'
})
export class Consultoria {
  cardConsultoria: CardColor[] = [
    {
      titulo:'Digitaliación y trabajo',
      texto:'Más que un ahorro de costes para la organización, hablamos de ahorro de tiempo, menor riesgo y mayor estabilidad.',
      imagen: 'transformtiondigital.png',
    },
    {
      titulo:'Digitaliación y trabajo',
      texto:'Más que un ahorro de costes para la organización, hablamos de ahorro de tiempo, menor riesgo y mayor estabilidad.',
      imagen: 'transformtiondigital.png',
    },   {
      titulo:'Digitaliación y trabajo',
      texto:'Más que un ahorro de costes para la organización, hablamos de ahorro de tiempo, menor riesgo y mayor estabilidad.',
      imagen: 'transformtiondigital.png',
    }
  ];

}
