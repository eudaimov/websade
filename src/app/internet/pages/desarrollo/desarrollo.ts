import { Component } from '@angular/core';
import {Bannerseccion} from '../../components/00 shared/bannerseccion/bannerseccion';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {CarDuoMultiple} from '../../components/00 shared/car-duo-multiple/car-duo-multiple';
import {CardDuo} from '../../components/00 shared/card-duo/card-duo';
import {Colorcomponent} from '../../components/00 shared/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {DesarrolloAndOutsourcing} from '../../components/desarrollo-and-outsourcing/desarrollo-and-outsourcing';

@Component({
  selector: 'app-desarrollo-page',
  imports: [
    Bannerseccion,
    Buscamostalento,
    CarDuoMultiple,
    Colorcomponent,
    DesarrolloAndOutsourcing
  ],
  templateUrl: './desarrollo.html',
  styleUrl: './desarrollo.css'
})
export class Desarrollo {
  cardClavesFactoria : CardColor[] = [
    {
      titulo: $localize `:@@desarrollo.cardColor.titulo1:Demanda privada en crecimiento`,
      texto: $localize `:@@desarrollo.cardColor.texto1:Con el fin de afrontar las innovaciones necesarias en el sector, reducción de costes y la mejora de calidad.`,
      imagen: 'privateDemand.png',
    },
    {
      titulo: $localize `:@@desarrollo.cardColor.titulo2:Comunicación flexible y relaciones excelentes`,
      texto: $localize `:@@desarrollo.cardColor.texto2:Cada vez es más importante contar con procesos de seguimiento de las tareas y sistemas de control de calidad.`,
      imagen: 'comunicacion.png',
    },
    {
      titulo: $localize `:@@desarrollo.cardColor.titulo3:Más allá del ahorro de costes`,
      texto: $localize `:@@desarrollo.cardColor.texto3:Más que un ahorro de costes para la organización, hablamos de ahorro de tiempo, menor riesgo y mayor estabilidad.`,
      imagen: 'ahorro.png',
    },
    {
      titulo: $localize `:@@desarrollo.cardColor.titulo4:Colaboración por la innovación`,
      texto: $localize `:@@desarrollo.cardColor.texto4:La asociatividad y colaboración entre empresas impulsa las fortalezas, al mismo tiempo que mantiene su autonomía.`,
      imagen: 'colaboracion.png',
    },
    {
      titulo: $localize `:@@desarrollo.cardColor.titulo5:Enfoque Integral a largo plazo`,
      texto: $localize `:@@desarrollo.cardColor.texto5:Hoy en día el outsourcing es más una estrategia de desarrollo a largo plazo que un servicio en si mismo.`,
      imagen: 'enfoque.png',
    },
    {
      titulo: $localize `:@@desarrollo.cardColor.titulo6:Contratación legal`,
      texto: $localize `:@@desarrollo.cardColor.texto6:Cualquier actividad puede externalizarse si se identifica como \"legalmente externalizable\".`,
      imagen: 'legal.png',
    },
  ]


  cardImagenes: CardDuo[] = [
    {
      image: 'externalizacionServicios.jpg',
      description: $localize  `:@@desarrollo.cardDuo.descripcion1:<p class='normal mb-4'>Los procesos de transformación del negocio y la implantación de innovaciones tecnológicas se han convertido en una prioridad en las organizaciones. Ya no basta con que los procesos de negocio se alineen con la tecnología, sino que ésta debe adaptarse al negocio para ser capaz de transformar todos sus procesos.</p> +
        <p class='normal'>En SADE permitimos a nuestros clientes centrarse en su core de negocio. Nuestra experiencia para iniciar nuevos proyectos rápidamente permite a nuestros clientes ser más ágiles y reducir su time-to-market</p>`,
      title: $localize `:@@desarrollo.cardDuo.titulo1:Asumimos funciones de las organizaciones externalizando sus procesos`,
      picturesDescription: [],
      par: false
    },
    {
      image: 'objetivosOperativos.jpg',
      description: $localize  `:@@desarrollo.cardDuo.descripcion2:<p class='normal mb-4'>Los márgenes de acción en el ámbito tecnológico se estrechan cada vez más y la inversión constante en IT es imprescindible para no perder competitividad. Por esa razón, contar con un proveedor que entienda la organización, sus procesos de negocio y el entorno competitivo donde desarrolla su actividad permitirá aunar esfuerzos y recursos, agilizando los desarrollos y adoptando las mejores decisiones en un tiempo récord.</p> +
        <p class='normal'>En SADE estamos totalmente orientados al servicio. Aseguramos los objetivos de nuestros clientes mediante nuestra óptima calidad de procesos.</p>`,
      title: $localize `:@@desarrollo.cardDuo.titulo2:Creamos servicios que garantizan los objetivos operativos de nuestros clientes`,
      picturesDescription: [],
      par: true
    },
    {
      image: 'movilidad.jpg',
      description: $localize  `:@@desarrollo.cardDuo.descripcion3:<p class='normal mb-4'>Servicios gestionados, donde realizamos todo tipo de desarrollo tecnológico, proyectos a medida para cada cliente y necesidad. Aportando valor a nuestros clientes con nuestra experiencia y know-how.</p> +
        <p class='normal'>Nuestro outsourcing se basa en las mejores prácticas en la aplicación de las tecnologías de la información y el conocimiento.</p>`,
      title: $localize `:@@desarrollo.cardDuo.titulo3:Desarrollamos soluciones innovadoras a medida`,
      picturesDescription: [],
      par: false
    },
    {
      image: 'qa.jpg',
      description: $localize  `:@@desarrollo.cardDuo.descripcion4:
        <p class="normal">
            Aplicamos la innovación a un modelo propio de la gestión del talento. En SADE creemos que las personas están por encima de los procesos.
        </p>
        <p class="normal">
            Proporcionamos a las compañías personal cualificado a un coste sin competencia en el mercado y también con una amplia experiencia profesional en el sector tecnológico.
        </p>
        `,
      title: $localize `:@@desarrollo.cardDuo.titulo4:Las personas como elemento clave de nuestro servicio de Outsourcing`,
      picturesDescription: [],
      par: true
    },
  ];

}
