import { Component } from '@angular/core';
import {Bannerseccion} from "../../components/00 shared/bannerseccion/bannerseccion";
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {Colorcomponent} from '../../components/00 shared/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {CarDuo} from '../../interfaces/carDuo';
import {CarDuoMultiple} from '../../components/00 shared/car-duo-multiple/car-duo-multiple';
import {Soluciones} from '../../components/soluciones/soluciones';

@Component({
  selector: 'app-digitalizacion-page',
  imports: [
    Bannerseccion,
    Buscamostalento,
    Colorcomponent,
    CarDuoMultiple,
    Soluciones
  ],
  templateUrl: './digitalizacion.html',
  styleUrl: './digitalizacion.css'
})
export class Digitalizacion {
  cardsClavesExito:CardColor[]=[
    {
      titulo: 'Asesoramos y acompañamos',
      texto: 'Asesoramos y acompañamos en la construcción de una infraestructura Cloud segura y migramos las cargas de trabajo de forma eficaz.',
      imagen: 'asesoramos.png',
    },
    {
      titulo: 'Microsoft 365',
      texto: 'Utilizamos toda la potencia de Microsoft 365 con sus soluciones de colaboración, telefonía, gestión, seguridad y control de amenazas.',
      imagen: '365.png',
    },
    {
      titulo: '24x7',
      texto: 'Asegura un lugar de trabajo moderno con asistencia especializada 24x7, concienciación sobre seguridad y control de amenazas.',
      imagen: '24x7.png',
    },  {
      titulo: 'Modernización de aplicaciones',
      texto: 'Evaluamos las aplicaciones críticas para la empresa y determinamos si es necesario cambiarlas, refactorizarlas o reconstruirlas.',
      imagen: 'modernizacion.png',
    },
    {
      titulo: 'Diseñamos soluciones',
      texto: 'Diseñamos soluciones nativas en la nube con contenedores, entornos sin servidores, análisis de datos y pilas IA y AA.',
      imagen: 'diseñamos.png',
    },
    {
      titulo: 'Rentabilidad',
      texto: 'Rentabiliza al máximo tus inversiones para reducir los gastos asociados a licencias y dimensionar correctamente el uso del Cloud.',
      imagen: 'rentabilidad.png',
    },
  ]
  cardImagenes: CarDuo[] = [
    {
      image: 'serviciosCloud.jpg',
      description: "<p class='normal mb-4'>SADE es consciente de que no hay un único camino al Cloud y que cada compañía se encuentra en un grado de madurez diferente, o pueden tener una estrategia o perseguir unos objetivos distintos. En SADE tenemos en cuenta el Cloud Journey de cada cliente para ofrecer unos servicios y unas soluciones que se ajusten a sus necesidades.</p>",
      title: "Servicios Cloud",
      picturesDescription: [],
      par: false
    },
    {
      image: 'solucionesUnificadas.jpg',
      description: "<p class='normal mb-4'>Tus clientes y socios necesitan llamar y comunicarse con tus empleados trabajen donde trabajen. El trabajo híbrido y remoto está cambiando el rumbo de los sistemas de comunicaciones. Aportamos experiencia y soluciones modulares para cubrir las necesidades de cualquier organización.</p>",
      title: "Soluciones de comunicación unificadas",
      picturesDescription: [],
      par: true
    },
    {
      image: 'serviciosAutomatizacion.jpg',
      description: "<p class='normal mb-4'>Transformar negocios requiere la mejora continua de los procesos ante las nuevas necesidades del mercado. En estrategias de automatización se necesita que se comprendan los procesos y el comportamiento de los datos relacionados, que los cambios se apliquen con rapidez mediante tecnologías que requieran poca o ninguna codificación, y que los trabajadores tengan la capacidad de automatizar las tareas. En SADE proporcionamos una estrategia de automatización y experiencia que pueden reducir los costes operativos.</p>",
      title: "Servicios de automatización",
      picturesDescription: [],
      par: false
    },
    {
      image: 'modernizacionAplicaciones.jpg',
      description: "<p class='normal mb-4'>Modernizar las aplicaciones mediante el rewriting o refactoring del código para hacerlas nativas en el Cloud es crucial para alcanzar todos los beneficios que desean las empresas. Este enfoque de migración de las aplicaciones heredadas puede ser un proceso lento y caro. En SADE ayudamos a los clientes a evaluar, planificar, desarrollar e implementar aplicaciones en la nube.</p>",
      title: "Modernización de aplicaciones",
      picturesDescription: [],
      par: true
    },
    {
      image: 'desarrolloCloud.jpg',
      description: "<p class='normal mb-4'>Las aplicaciones son los cimientos de un entorno maduro en el Cloud. Pero hacer el trabajo exige tiempo, así como recursos de diseño y desarrollo que escapan a las competencias de la mayoría de los equipos de IT. Trabajar con un socio de confianza suele ser la vía más rápida para las empresas cuando se necesita lanzar una experiencia de usuario móvil, un servicio web, un microservicio o una aplicación contenerizada. Es esencial forjar una relación basada en la confianza.</p>",
      title: "Desarrollo de aplicaciones cloud",
      picturesDescription: [],
      par: false
    },
    {
      image: 'seguridad.jpg',
      description: "<p class='normal mb-4'>El teletrabajo es el futuro, por lo que los datos nunca han sido tan accesibles ni han estado tan expuestos. Los robos por parte de intrusos malintencionados o las pérdidas por errores de los empleados son preocupaciones reales a las que las empresas hacen frente día a día. Se estima que de tres a cinco días a la semana se puede teletrabajar, y que esos empleados deben conectarse a las plataformas de gestión de servicios para coordinar su trabajo y registrar los resultados. Ayudamos a mantener la seguridad de los datos empresariales independientemente del lugar desde el que trabaje tu equipo.</p>",
      title: "Seguridad en el puesto de trabajo",
      picturesDescription: [],
      par: true
    },
  ];
}
