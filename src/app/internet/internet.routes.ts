import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Conocenos} from './pages/conocenos/conocenos';
import {Talento} from './pages/talendo/talento';
import {Digitalizacion} from './pages/digitalizacion/digitalizacion';
import {Tdiferenciales} from './pages/tdiferenciales/tdiferenciales';
import {Desarrollo} from './pages/desarrollo/desarrollo';
import {Ia} from './pages/ia/ia';
import {Consultoria} from './pages/consultoria/consultoria';
import {ContactanosPage} from './pages/contactanos/contactanos';
import {Noticias} from './pages/noticias/noticias';
import {Demo} from './pages/demo/demo';

export const internetRoute: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        title: 'House',
        data: {"category": 'principal'},
        component:Home,
        pathMatch: 'full',
      },
      {
        path: 'conocenos',
        title: 'Conócenos',
        data: {"category": 'principal'},
        component: Conocenos
      },
      {
        path: 'talento',
        title: 'Talento',
        data: {"category": 'principal'},
        component: Talento
      },
      {
        path: 'noticias',
        title: 'Noticias',
        data: {"category": 'principal'},
        component: Noticias
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
        component: Consultoria
      },
      {
        path: 'iagenerativa',
        title: 'IA Generativa Privada',
        data: {
          "category": 'secondary',
          "color":'#ff1742',
        },
        component: Ia
      },
      {
        path: 'desarrollo',
        title: 'Desarrollo y Outsourcing',
        data: {
          "category": 'secondary',
          "color":'#023671',
        },
        component: Desarrollo
      },
      {
        path: 'tdiferenciales',
        title: 'Tecnologías Diferenciales',
        data: {
          "category": 'secondary',
          "color":'#f4ec11',
        },
        component: Tdiferenciales
      },
      {
        path: 'digitalizacion',
        title: 'Digitalización y Trabajo',
        data: {
          "category": 'secondary',
          "color":'#f48311',
        },
        component: Digitalizacion
      },
      {
        path: 'demo',
        title: 'Solicitar una demos',
        data: {
          category: 'suelta'
        },
        component: Demo
      },
      {
        path:'**',
        redirectTo:'home'
      },

    ]
  }
];
