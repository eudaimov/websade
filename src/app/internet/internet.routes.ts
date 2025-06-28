// G:/Aprendizaje/ProyectosInformaticos/Angular/websade/src/app/internet/internet.routes.ts
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

// No es estrictamente necesario importarlo si @angular/localize está configurado,
// pero puede ayudar a la claridad o si el linter lo pide.
// declare const $localize: any; // O import { $localize } from '@angular/localize'; si tu IDE lo sugiere

export const internetRoute: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        // Usamos $localize con un ID único para la traducción
        title: $localize`:@@route.homeTitle:House`,
        data: {"category": 'principal'},
        component:Home,
        pathMatch: 'full',
      },
      {
        path: 'conocenos',
        title: $localize`:@@route.conocenosTitle:Conócenos`,
        data: {"category": 'principal'},
        component: Conocenos
      },
      {
        path: 'talento',
        title: $localize`:@@route.talentoTitle:Talento`,
        data: {"category": 'principal'},
        component: Talento
      },
      {
        path: 'noticias',
        title: $localize`:@@route.noticiasTitle:Noticias`,
        data: {"category": 'principal'},
        component: Noticias
      },
      {
        path: 'contactanos',
        title: $localize`:@@route.contactanosTitle:Contáctanos`,
        data: {"category": 'principal'},
        component: ContactanosPage
      },
      {
        path: 'consultoria',
        title: $localize`:@@route.consultoriaTitle:Consultoría`,
        data: {
          "category": 'secondary',
          "color":'#8bc400',
        },
        component: Consultoria
      },
      {
        path: 'iagenerativa',
        title: $localize`:@@route.iaGenerativaTitle:IA Generativa Privada`,
        data: {
          "category": 'secondary',
          "color":'#ff1742',
        },
        component: Ia
      },
      {
        path: 'desarrollo',
        title: $localize`:@@route.desarrolloTitle:Desarrollo y Outsourcing`,
        data: {
          "category": 'secondary',
          "color":'#023671',
        },
        component: Desarrollo
      },
      {
        path: 'tdiferenciales',
        title: $localize`:@@route.tdiferencialesTitle:Tecnologías Diferenciales`,
        data: {
          "category": 'secondary',
          "color":'#f4ec11',
        },
        component: Tdiferenciales
      },
      {
        path: 'digitalizacion',
        title: $localize`:@@route.digitalizacionTitle:Digitalización y Trabajo`,
        data: {
          "category": 'secondary',
          "color":'#f48311',
        },
        component: Digitalizacion
      },
      {
        path: 'demo',
        title: $localize`:@@route.demoTitle:Solicitar una demos`,
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
