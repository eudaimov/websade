import { Component } from '@angular/core';
import {Colorcomponent} from '../../components/00 shared/colorcomponent/colorcomponent';
import {CardColor} from '../../interfaces/carColor';
import {Bannerseccion} from '../../components/00 shared/bannerseccion/bannerseccion';
import {Buscamostalento} from '../../components/buscamotalento/buscamostalento';
import {Iagenerativa} from '../../components/iagenerativa/iagenerativa';
import {CarDuoMultiple} from '../../components/00 shared/car-duo-multiple/car-duo-multiple';
import {CardDuo} from '../../components/00 shared/card-duo/card-duo';

@Component({
  selector: 'app-ia-page',
  imports: [
    Colorcomponent,
    Bannerseccion,
    Buscamostalento,
    Iagenerativa,
    CarDuoMultiple
  ],
  templateUrl: './ia.html',
  styleUrl: './ia.css'
})
export class Ia {
  cardConsultoria: CardColor[] = [
    {
      titulo: $localize `:@@ia.cardColor.titulo1:Privacidad, Gobierno del dato y Seguridad`,
      texto: $localize `:@@ia.cardColor.texto1:Almacenamiento local en vuestros propios servidores, garantizando que la información confidencial nunca abandone vuestra red interna.`,
      imagen: 'privacidad.png',
    },
    {
      titulo: $localize `:@@ia.cardColor.titulo2:Control Total`,
      texto: $localize `:@@ia.cardColor.texto2:Capacidad de personalizar y ajustar el modelo según las necesidades específicas de vuestro negocio, sin depender de proveedores externos.`,
      imagen: 'control.png',
    },
    {
      titulo: $localize `:@@ia.cardColor.titulo3:Capacidades de Ajuste Fino`,
      texto: $localize `:@@ia.cardColor.texto3:Adaptación a los casos de uso concretos de cada departamento, mejorando la precisión y relevancia en tareas especializadas.`,
      imagen: 'puzzle.png',
    },
    {
      titulo: $localize `:@@ia.cardColor.titulo4:Independencia del Proveedor`,
      texto: $localize `:@@ia.cardColor.texto4:Evita la dependencia de proveedores externos, reduciendo costes a largo plazo y minimizando riesgos de exposición de datos.`,
      imagen: 'independencia.png',
    },
    {
      titulo: $localize `:@@ia.cardColor.titulo5:Cumplimiento Normativo Europeo`,
      texto: $localize `:@@ia.cardColor.texto5:Desarrollado en Europa, cumpliendo con todas las normativas de protección de datos y regulaciones de IA.`,
      imagen: 'ue.png',
    },
    {
      titulo: $localize `:@@ia.cardColor.titulo6:Mejor ROI`,
      texto: $localize `:@@ia.cardColor.texto6:Sin coste de licenciamiento, convirtiéndose en una opción extremadamente rentable.`,
      imagen: 'free.png',
    }
  ];

   cardImagenes:CardDuo []= [
     {
       image: 'privacidadSeguridad.jpg',
       description: $localize
         `:@@ia.cardDuo.description1:<li class='normal list-disc'><strong>Almacenamiento local:</strong>
                A diferencia de los modelos alojados en la nube, PrivateGPT permite que las empresas mantengan los datos dentro de sus propios servidores o infraestructura privada. Esto garantiza que los datos confidenciales no salgan de la red de la empresa.</li>
         <li class='normal list-disc'><strong>Control total:</strong>
                Las organizaciones pueden ajustar y personalizar el modelo según sus necesidades, sin depender de un proveedor externo que maneje su información.</li>`,
       title: $localize `:@@ia.cardDuo.titulo1:Privacidad y seguridad`,
       picturesDescription: [],
       par: false
     },
     {
       image: 'capacidadesDeAjusteFino.jpg',
       description: $localize
         `:@@ia.cardDuo.description2:<p class='normal'>Las empresas pueden ajustar el modelo a sus casos de uso específicos. Esto les permite personalizar el modelo con terminología o conocimientos específicos de su sector, lo que mejora la precisión en tareas especializadas.</p>
          <p>Las empresas pueden ajustar el modelo a sus casos de uso específicos. Esto les permite personalizar el modelo con terminología o conocimientos específicos de su sector, lo que mejora la precisión en tareas especializadas.</p>`,
       title: $localize `:@@ia.cardDuo.titulo2:Capacidades de ajuste fino`,
       picturesDescription: [],
       par: true
     },
     {
       image: 'independenciaProveedor.jpg',
       description: $localize `:@@ia.cardDuo.description3:<p class='normal'>Una ventaja clave de PrivateGPT es la capacidad de evitar la dependencia de proveedores como OpenAI, Google, o Amazon. Esto puede ser útil en escenarios donde las empresas buscan reducir costos a largo plazo o evitar la exposición de datos sensibles a actores externos.</p>`,
       title: $localize `:@@ia.cardDuo.titulo3:Independencia del proveedor`,
       picturesDescription: [],
       par: false
     },
     {
       image: 'desarrolladoEuropa.jpg',
       description: $localize `:@@ia.cardDuo.description4:<ul class='list-disc'>
            <li>El LLM (Mistral) ha sido desarrollado en Europa, con lo que cumple de salida con toda la normativa europea que regula el uso de las IA.</li>
            <li>El LLM (Mistral) esConcepto iPhone: es un Hardware para un Software, o un Software para un Hardware.</li>
         </ul>`,
       title: $localize `:@@ia.cardDuo.titulo4:Desarrollado en Europa`,
       picturesDescription: [],
       par: true
     },
    {
      image: 'mejorROI.jpg',
      description: $localize `:@@ia.cardDuo.description5:<p class='normal'>No hay coste de licenciamiento. Da igual el número de usuarios que vayan a trabajar con él, de diferentes departamentos. Se pueden crear tantos departamentos o secciones dentro de un departamento como se quieran. Nadie va a ver nada que no tenga que ver internamente</p>`,
      title: $localize `:@@ia.cardDuo.titulo5:Mejor ROI`,
      picturesDescription: [],
      par: false
    },
  ]

}
