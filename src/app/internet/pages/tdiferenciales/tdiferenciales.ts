import { Component } from '@angular/core';
import {Bannerseccion} from "../../components/00 shared/bannerseccion/bannerseccion";
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {CardDuo} from '../../components/00 shared/card-duo/card-duo';
import {CarDuoMultiple} from '../../components/00 shared/car-duo-multiple/car-duo-multiple';
import {Colorcomponent} from '../../components/00 shared/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {TecnologiasDiferenciasText} from '../../components/tecnologias-diferencias-text/tecnologias-diferencias-text';

@Component({
  selector: 'app-tdiferenciales-page',
  imports: [
    Bannerseccion,
    Buscamostalento,
    CarDuoMultiple,
    Colorcomponent,
    TecnologiasDiferenciasText
  ],
  templateUrl: './tdiferenciales.html',
  styleUrl: './tdiferenciales.css'
})
export class Tdiferenciales {
  cardTecnologiasFuturo: CardColor[] =[
    {
      titulo:  $localize `:@@difereciales.cardColor.titulo1:Especialización`,
      texto: $localize `:@@diferenciales.cardColor.texto1:Disponemos de equipos expertos en todas las áreas TIC`,
      imagen: 'especializacion.png',
    },
    {
      titulo:  $localize `:@@difereciales.cardColor.titulo2:Comprometidos con la innovación`,
      texto: $localize `:@@diferenciales.cardColor.texto2:Más del 30% de la actividad empresarial es I+D+i`,
      imagen: 'comprometidos.png',
    },
    {
      titulo:  $localize `:@@difereciales.cardColor.titulo3:Pensando en el cliente`,
      texto: $localize `:@@diferenciales.cardColor.texto3:Implementación tecnológica analizando las características de cada cliente`,
      imagen: 'pensando.png',
    },
  ]

  cardImagenes: CardDuo[] = [
    {
      image: 'herramientasColaborativas.jpg',
      description: $localize `:@@diferenciales.cardDuo.description1:<p class='normal mb-4'>Las soluciones de colaboración impulsan la productividad, generan innovación, y hacen que el conocimiento fluya y florezca dentro de la organización. En SADE lo abordamos teniendo en cuenta todos los ángulos de influencia posible, y utilizamos las tecnologías más punteras, como Liferay, y Sharepoint, para crear soluciones realmente eficientes, útiles y accesibles desde cualquier dispositivo.</p>`,
      title: $localize `:@@diferenciales.cardDuo.titulo1:Desarrollo de entornos de colaboración`,
      picturesDescription: ['liferaylogo.jpg', 'sharePoint.png'],
      par: false
    },
    {
      image: 'automatizacion.jpg',
      description: $localize `:@@diferenciales.cardDuo.description2:<p class='normal mb-4'>En SADE desarrollamos soluciones robotizadas (RPA) con tecnología UIPath, que simulan las acciones de un usuario. El objetivo fundamental es automatizar los procesos de negocio que son muy repetitivos, basados en normas y que utilizan información estructurada, estos desarrollos tienen como objeto optimizar costes y mejorar la productividad de la empresa.</p>
      <li class='list-disc'>Reducción en el número de FTEs requeridos en los procesos de negocio robotizados</li>
      <li class='list-disc'>Incremento de la productividad 24/7 mejorando la ventana de operación y ganando elasticidad</li>
      <li class='list-disc'>Reducción del tiempo medio de gestión</li>
      <li class='list-disc'>Incremento de la calidad Error humano eliminado, menor revisión</li>`,
      title: $localize `:@@diferenciales.cardDuo.titulo2:RPA - Soluciones robotizadas`,
      picturesDescription: ['uiPath2.png', 'druid2.png'],
      par: true
    },
    {
      image: 'desarrolloMovil.jpg',
      description: $localize `:@@diferenciales.cardDuo.description3:<p class='normal mb-4'>La movilidad de los recursos de la empresa supone a la vez un reto y una oportunidad. En el contexto competitivo actual, las empresas tienen recursos humanos dotados de una alta movilidad, con una importante necesidad operativa y estratégica de acceso a la información corporativa anytime, anywhere. En SADE desarrollamos en las principales tecnologías del mercado aplicaciones que ayudan a las empresas a mejorar la productividad.</p>`,
      title: $localize `:@@diferenciales.cardDuo.titulo3:Desarrollo Móvil`,
      picturesDescription: ['flutter.png', 'maui-logo.svg', 'AndroidLogo.png', 'ios.png'],
      par: false
    },
    {
      image: 'InnovadoresMedida.jpg',
      description: $localize `:@@diferenciales.cardDuo.description4:<p class='normal mb-4'>Equipos de desarrollo, donde realizamos todo tipo de desarrollos tecnológicos y proyectos a medida para cada cliente y necesidad. Aportando valor a nuestros clientes con nuestra experiencia y know-how.</p>+
        <p class='normal'>Nuestro outsourcing se basa en las mejores prácticas en la aplicación de las tecnologías de la información y el conocimiento</p>`,
      title: $localize `:@@diferenciales.cardDuo.titulo4:Desarrollamos soluciones innovadoras a medida`,
      picturesDescription: ['puntoNET.png', 'javaInnovador.png'],
      par: true
    },
    {
      image: 'MicrosoftServices.jpg',
      description: $localize `:@@diferenciales.cardDuo.description5:<p class='normal mb-4'>Consolidamos los principales servicios informáticos de Microsoft para empresas en un área especializada y experta. Te ofrecemos toda la cartera de herramientas de Microsoft adaptadas a tus necesidades de negocio.</p>+
        <p class='normal'>Nuestro objetivo es ofrecer soluciones ágiles que permitan incrementar la eficiencia de cualquier negocio. Para ello contamos con una paquetización y desarrollo customizados en base a las necesidades de tu negocio.</p>`,
      title: $localize `:@@diferenciales.cardDuo.titulo5:Microsoft Services`,
      picturesDescription: ['office365.png', 'microsoft365.png','sharePoint.png'],
      par: false
    },
    {
      image: 'microserviciosCard.jpg',
      description: $localize `:@@diferenciales.cardDuo.description6:<p class='normal mb-4'>En SADE somos expertos en construir aplicaciones basadas en microservicios, conjuntos de pequeños servicios, con operaciones bien definidas e independientes entre sí. Cada microservicio ejecuta su propio proceso y se encarga de implementar una funcionalidad completa del negocio.</p>
        <p class='normal'>Te ayudamos a definir e implantar una estrategia de desarrollo en microservicios, que asegure la viabilidad del cambio y la obtención de los beneficios según el ciclo de vida previsto.</p>`,
      title: $localize `:@@diferenciales.cardDuo.titulo6:Microservicios`,
      picturesDescription: ['microservicios.png'],
      par: true
    },
    {
      image: 'sistemasGestion.jpg',
      description: $localize `:@@diferenciales.cardDuo.description7:<p class='normal mb-4'>En SADE contamos con profesionales expertos en el desarrollo, mantenimiento e integración de las aplicaciones corporativas que interconectan los diferentes sistemas específicos disponibles en la empresa, tales como ERPs o CRMs.</p>
        <p class='normal'>Entre nuestros casos de éxito contamos con especialistas con sistemas de gestión como: <strong>SAP</strong> y <strong>Salesforce</strong>.</p>`,
      title: $localize `:@@diferenciales.cardDuo.titulo7:Desarrollo e integración de soluciones especializadas`,
      picturesDescription: ['salesforce.png', 'sap.png'],
      par: false
    },
    {
      image: 'frontEnd.jpg',
      description: $localize `:@@diferenciales.cardDuo.description8:<p class='normal mb-4'>En SADE sabemos que el desarrollo front-end en un entorno Microsoft 365 generalmente implica el uso de tecnologías web estándar como HTML, CSS y JavaScript, así como la comprensión de los frameworks y bibliotecas relevantes, como Vue, React o Angular, dependiendo de las tecnologías preferidas en el entorno específico y las necesidades de nuestros clientes, motor de nuestra compañía.</p>`,
      title: $localize `:@@diferenciales.cardDuo.titulo8:Desarrollo Front-End`,
      picturesDescription: ['angular.svg', 'react.svg', 'vue.svg'],
      par: true
    },

  ]
}
