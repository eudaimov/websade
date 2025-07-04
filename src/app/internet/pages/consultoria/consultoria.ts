import {Component} from '@angular/core';
import {Colorcomponent} from '../../components/00 shared/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {Bannerseccion} from '../../components/00 shared/bannerseccion/bannerseccion';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {Tecnologia} from '../../components/tecnologia/tecnologia';
import {CardDuo} from '../../components/00 shared/card-duo/card-duo';
import {CarDuoMultiple} from '../../components/00 shared/car-duo-multiple/car-duo-multiple';

@Component({
  selector: 'app-consultoria-page',
  imports: [
    Colorcomponent,
    Bannerseccion,
    Buscamostalento,
    Tecnologia,
    CarDuoMultiple
  ],
  templateUrl: './consultoria.html',
  styleUrl: './consultoria.css'
})
export class Consultoria {
  cardConsultoria: CardColor[] = [
    {
      titulo: $localize`:@@consultoria.color.card1.titulo: Mejorar la eficiencia deMáxima dedicación`,
      texto: $localize`:@@consultoria.color.card1.texto: Ayudamos a la definición y consecución de los objetivos de nuestros clientes.`,
      imagen: 'desafios.png',
    },
    {
      titulo: $localize`:@@consultoria.color.card2.titulo: how tecnológico`,
      texto: $localize`:@@consultoria.color.card2.texto: Somos líderes en la resolución de los retos tecnológicos actuales`,
      imagen: 'know-how.png',
    }, {
      titulo: $localize`:@@consultoria.color.card3.titulo: Enfocados en los objetivos`,
      texto: $localize`:@@consultoria.color.card3.texto: Conectamos los objetivos de negocio con los nuevos retos de un mercado.`,
      imagen: 'objetivo.png',
    }
  ];

  cardImagenes: CardDuo [] = [
    {
      "title": $localize`:@@consultoria.cardDuo.titulo1:Consultoria Cloud`,
      "description": $localize`:@@consultoria.cardDuo.text1:
            <p class='mb-4'>En SADE te ayudamos a elegir la tecnología y la tipología de cloud más adecuada</p>
            <ul class='list-disc'>
                <li><strong> Selección del modelo Cloud: </strong>Elige el modelo que mejor se adapta (SaaS, IaaS, PaaS) y paga por lo que necesites. Flexible, seguro, adaptable y sin límites.</li>
                <li> <strong>Servicios de migración: </strong>Construimos una infraestructura Cloud segura y migramos las cargas de trabajo de forma eficaz.</li>
                <li><strong> Servicios Cloud:</strong> Nuestros expertos gestionan todos los procesos necesarios para operar en el Cloud.</li>
             </ul>`,
      "image": "consultoriaCloud.jpg",
      "par": false,
      "picturesDescription": []
    },
    {
      "title": $localize`:@@consultoria.cardDuo.titulo2:Consultoría Tecnológica`,
      "description": $localize`:@@consultoria.cardDuo.text2:
            <p class='mb-4'><strong>Realizamos un Diagnóstico 360º</strong>, realizamos una assessment IT en profundidad de tu empresa para tener una fotografía completa del escenario de partida.</p>
            <p><strong> Realizamos un Plan de Acción</strong>, te presentamos un completo plan de acción con las medidas a tomar para optimizar y mejorar las áreas IT analizadas.</p>
            <p> <strong>Implantación del Plan de Acción</strong>, podemos acompañarte y ayudarte a realizar los cambios propuestos. Somos la mejor garantía del éxito de la implantación.</p>
               <p><strong> Evaluación y Resultados</strong>, te proporcionamos un estudio final comparativo, entre el estado inicial y el estado final de tu empresa para evaluar los resultados.</p>`,
      "image": "consultoriaTecnologica.jpg",
      "par": true,
      "picturesDescription": []
    },
    {
      "title": $localize`:@@consultoria.cardDuo.titulo3:QA Services & Testing`,
      "description": $localize`:@@consultoria.cardDuo.texto3:  <p>Ayudamos a las empresas a establecer un proceso estandarizado de Quality Assurance en sus activos digitales más representativos con el claro objetivo de implantar una metodología de calidad común y alcanzar el grado de madurez deseado.</p>
        <p>• <strong>Líneas estratégicas básicas</strong>, que deben guiar el desarrollo de una práctica futura de QA.</p>
        <p>• <strong>Marco metodológico</strong>, que muestre los componentes elementales de una metodología de QA y sirva como referencia dentro del SDLC.</p>
        <p>• <strong>La función del equipo de QA</strong>, con una definición de roles y responsabilidades, así como su estructuración y capacitación.</p>
        <p>• <strong>Herramientas tecnológicas</strong> que soporten la actividad de QA &amp; Testing</p>`,
      "image": "qaServices.jpg",
      "par": false,
      "picturesDescription": []
    },
    {
      "title": $localize`:@@consultoria.cardDuo.titulo4:Automatización de procesos de negocio`,
      "description": $localize`:@@consultoria.cardDuo.texto4:
        <p>Acompañamos a las organizaciones en todo el proceso de transformación digital:</p>
        <p>• <strong>En el ámbito estratégico</strong>: Descubrimiento y análisis automático de procesos. Identificación de cómo se está operando en la organización, cuellos de botella, ineficiencias, etc.</p>
        <p>• <strong>En el ámbito táctico</strong>: La implantación de un CoE (Centro de Excelencia) u oficina de automatizaciones.</p>
        <p>• <strong>En el ámbito operativo</strong>: La implantación de las automatizaciones utilizando el paradigma RPA, las nuevas aplicaciones CBA, Chatbots inteligentes y el uso de capacidades de inteligencia artificial, como Document Understanding, FAQs, Lenguaje natural, etc.</p>`,
      "image": "automaticacionProcesos.jpg",
      "par": true,
      "picturesDescription": []
    },
    {
      "title": $localize`:@@consultoria.cardDuo.titulo5:Movilidad y aplicaciones multiplataforma`,
      "description": $localize`:@@consultoria.cardDuo.texto5:
            <p class='mb-4'><strong>Abordamos el proceso completo, desde la conceptualización y desarrollo de la aplicación hasta su implantación y mantenimiento, así como el asesoramiento para nuevas oportunidades de crecimiento.</strong></p>
            <p>Ofrecemos soluciones a medida para todo tipo de plataformas: Android, iOS, aplicaciones híbridas, desarrollo multiplataforma, aplicaciones web, ... y creamos equipos dedicados para nuestros clientes a través de nuestros Agile Centers.</p>`,
      "image": "multiplataforma.jpg",
      "par": false,
      "picturesDescription": []
    },
    {
      "title": $localize`:@@consultoria.cardDuo.titulo6:Servicios Gestionados`,
      "description": $localize`:@@consultoria.cardDuo.texto6:
            <p class='mb-4'>El mantenimiento de las aplicaciones y sistemas permite reducir las incidencias en el servicio, pero, además, es clave para que las soluciones evolucionen de manera rápida y eficaz ante los nuevos retos a los que se enfrenta el negocio.</p>
            <p>La especialización, las técnicas de control y la alta eficiencia que se requieren en estas tareas no siempre están a disposición de una empresa. Por ello, <strong>los servicios gestionados cubren esta necesidad de administración, monitorización y soporte de TI y liberan a las organizaciones de estas tareas.</strong></p>`,
      "image": "mantenimiento.jpg",
      "par": true,
      "picturesDescription": []
    }


  ]

}
