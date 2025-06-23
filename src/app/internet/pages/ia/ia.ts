import { Component } from '@angular/core';
import {Colorcomponent} from '../../components/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {Bannerseccion} from '../../components/bannerseccion/bannerseccion';

@Component({
  selector: 'app-ia-page',
  imports: [
    Colorcomponent,
    Bannerseccion
  ],
  templateUrl: './ia.html',
  styleUrl: './ia.css'
})
export class Ia {
  cardConsultoria: CardColor[] = [
    {
      titulo:'Privacidad, Gobierno del dato y Seguridad',
      texto:'Almacenamiento local en vuestros propios servidores, garantizando que la información confidencial nunca abandone vuestra red interna.',
      imagen: 'privacidad.png',
    },
    {
      titulo:'Control Total',
      texto:'Capacidad de personalizar y ajustar el modelo según las necesidades específicas de vuestro negocio, sin depender de proveedores externos.',
      imagen: 'control.png',
    },
    {
      titulo:'Capacidades de Ajuste Fino',
      texto:'Adaptación a los casos de uso concretos de cada departamento, mejorando la precisión y relevancia en tareas especializadas.',
      imagen: 'puzzle.png',
    },
    {
      titulo:'Independencia del Proveedor',
      texto:'Evita la dependencia de proveedores externos, reduciendo costes a largo plazo y minimizando riesgos de exposición de datos.',
      imagen: 'independencia.png',
    },
    {
      titulo:'Cumplimiento Normativo Europeo',
      texto:'Desarrollado en Europa, cumpliendo con todas las normativas de protección de datos y regulaciones de IA.',
      imagen: 'ue.png',
    },
    {
      titulo:'Mejor ROI',
      texto:'Sin coste de licenciamiento, convirtiéndose en una opción extremadamente rentable.',
      imagen: 'free.png',
    }
  ];

}
