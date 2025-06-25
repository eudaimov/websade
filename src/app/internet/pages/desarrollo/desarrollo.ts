import { Component } from '@angular/core';
import {Bannerseccion} from '../../components/00 shared/bannerseccion/bannerseccion';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {CarDuoMultiple} from '../../components/00 shared/car-duo-multiple/car-duo-multiple';
import {CardDuo} from '../../components/00 shared/card-duo/card-duo';

@Component({
  selector: 'app-desarrollo-page',
  imports: [
    Bannerseccion,
    Buscamostalento,
    CarDuoMultiple
  ],
  templateUrl: './desarrollo.html',
  styleUrl: './desarrollo.css'
})
export class Desarrollo {
  cardImagenes: CardDuo[] = [
    {
      image: 'externalizacionServicios.jpg',
      description: "<p class='normal mb-4'>Los procesos de transformación del negocio y la implantación de innovaciones tecnológicas se han convertido en una prioridad en las organizaciones. Ya no basta con que los procesos de negocio se alineen con la tecnología, sino que ésta debe adaptarse al negocio para ser capaz de transformar todos sus procesos.</p>" +
        "<p class='normal'>En SADE permitimos a nuestros clientes centrarse en su core de negocio. Nuestra experiencia para iniciar nuevos proyectos rápidamente permite a nuestros clientes ser más ágiles y reducir su time-to-market</p>",
      title: "Asumimos funciones de las organizaciones externalizando sus procesos",
      picturesDescription: [],
      par: false
    },
    {
      image: 'objetivosOperativos.jpg',
      description: "<p class='normal mb-4'>Los márgenes de acción en el ámbito tecnológico se estrechan cada vez más y la inversión constante en IT es imprescindible para no perder competitividad. Por esa razón, contar con un proveedor que entienda la organización, sus procesos de negocio y el entorno competitivo donde desarrolla su actividad permitirá aunar esfuerzos y recursos, agilizando los desarrollos y adoptando las mejores decisiones en un tiempo récord.</p>" +
        "<p class='normal'>En SADE estamos totalmente orientados al servicio. Aseguramos los objetivos de nuestros clientes mediante nuestra óptima calidad de procesos.</p>",
      title: "Creamos servicios que garantizan los objetivos operativos de nuestros clientes",
      picturesDescription: [],
      par: true
    },
    {
      image: 'movilidad.jpg',
      description: "<p class='normal mb-4'>Servicios gestionados, donde realizamos todo tipo de desarrollo tecnológico, proyectos a medida para cada cliente y necesidad. Aportando valor a nuestros clientes con nuestra experiencia y know-how.</p>" +
        "<p class='normal'>Nuestro outsourcing se basa en las mejores prácticas en la aplicación de las tecnologías de la información y el conocimiento.</p>",
      title: "Desarrollamos soluciones innovadoras a medida",
      picturesDescription: [],
      par: false
    },
    {
      image: 'qa.jpg',
      description: "<li class='normal list-disc'><strong>Almacenamiento local:</strong> A diferencia de los modelos alojados en la nube, PrivateGPT permite que las empresas mantengan los datos dentro de sus propios servidores o infraestructura privada. Esto garantiza que los datos confidenciales no salgan de la red de la empresa.</li>" +
        "<li class='normal list-disc'><strong>Control total:</strong> Las organizaciones pueden ajustar y personalizar el modelo según sus necesidades, sin depender de un proveedor externo que maneje su información.</li>",
      title: "Las personas como elemento clave de nuestro servicio de Outsourcing",
      picturesDescription: [],
      par: true
    },
  ];

}
