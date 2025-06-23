import { Component } from '@angular/core';
import {PortadaSeccionComponent} from '../../components/portada-seccion/portada-seccion.component';
import {Portadahome} from '../../components/portadahome/portadahome';
import {Hablannosotros} from '../../components/hablannosotros/hablannosotros';
import {Nuestrasempresas} from '../../components/nuestraempresas/nuestrasempresas';
import {Contador} from '../../components/contador/contador';
import {Numerosimportan} from '../../components/numerosimportan/numerosimportan';
import {Colorcomponent} from '../../components/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {BannerTalento} from '../../components/banner-talento/banner-talento';

@Component({
  selector: 'app-home-page',
  imports: [
    Portadahome,
    Hablannosotros,
    Nuestrasempresas,
    Numerosimportan,
    Colorcomponent,
    BannerTalento
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  serviciosYsolucionesCards: CardColor[] = [
    {
      titulo: 'Consultoria',
      texto: 'Pensando en cómo la tecnología puede transformar el negocio de nuestros clientes. Reducimos costes optimizamos procesos en tu compañía',
      imagen: 'Consultoring.png' // Ejemplo de clase de Font Awesome
    },
    {
      titulo: 'Desarrollo y Outsourcing',
      texto: 'Aportamos valor a nuestros clientes con nuestra experiencia y nuestro saber hacer.',
      imagen: 'outsourcing.png'
    },
    {
      titulo: 'Soporte y Mantenimiento',
      texto: 'Garantizamos el funcionamiento óptimo y la seguridad de tus aplicaciones con nuestro soporte continuo.',
      imagen: 'Specialization.png'
    },
    {
      titulo:'Digitaliación y trabajo',
      texto:'Más que un ahorro de costes para la organización, hablamos de ahorro de tiempo, menor riesgo y mayor estabilidad.',
      imagen: 'transformtiondigital.png',
    }
  ];

}
