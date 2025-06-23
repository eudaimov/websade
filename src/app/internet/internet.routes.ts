import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {ConocenosPage} from './pages/conocenos-page/conocenos-page';
import {TalentoPage} from './pages/talendo-page/talento-page';
import {DigitalizacionPage} from './pages/digitalizacion-page/digitalizacion-page';
import {TdiferencialesPage} from './pages/tdiferenciales-page/tdiferenciales-page';
import {DesarrolloPage} from './pages/desarrollo-page/desarrollo-page';
import {IaPage} from './pages/ia-page/ia-page';
import {ConsultoriaPage} from './pages/consultoria-page/consultoria-page';
import {ContactanosPage} from './pages/contactanos-page/contactanos-page';
import {NoticiasPage} from './pages/noticias-page/noticias-page';
import {TrabajaPage} from './pages/trabaja-page/trabaja-page';

export const internetRoute: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        title: 'House',
        data: {"category": 'principal'},
        component:HomePage,
        pathMatch: 'full',
      },
      {
        path: 'conocenos',
        title: 'Conócenos',
        data: {"category": 'principal'},
        component: ConocenosPage
      },
      {
        path: 'talento',
        title: 'Talento',
        data: {"category": 'principal'},
        component: TalentoPage
      },
      {
        path: 'noticias',
        title: 'Noticias',
        data: {"category": 'principal'},
        component: NoticiasPage
      },
      {
        path: 'contactanos',
        title: 'Contáctanos',
        data: {"category": 'principal'},
        component: ContactanosPage
      },
      {
        path: 'consultoria',
        title: 'Consultoría',
        data: {
          "category": 'secondary',
          "color":'#8bc400',
        },
        component: ConsultoriaPage
      },
      {
        path: 'iagenerativa',
        title: 'IA Generativa Privada',
        data: {
          "category": 'secondary',
          "color":'#ff1742',
        },
        component: IaPage
      },
      {
        path: 'desarrollo',
        title: 'Desarrollo y Outsourcing',
        data: {
          "category": 'secondary',
          "color":'#023671',
        },
        component: DesarrolloPage
      },
      {
        path: 'tdiferenciales',
        title: 'Tecnologías Diferenciales',
        data: {
          "category": 'secondary',
          "color":'#f4ec11',
        },
        component: TdiferencialesPage
      },
      {
        path: 'digitalizacion',
        title: 'Digitalización y Trabajo',
        data: {
          "category": 'secondary',
          "color":'#f48311',
        },
        component: DigitalizacionPage
      },
      {
        path:'**',
        redirectTo:'home'
      },

    ]
  }
];
