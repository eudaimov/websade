import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    loadChildren: ()=>import('./internet/internet.routes').then(m=>m.internetRoute)
  },
  {
    path:'**',
    redirectTo:''
  }
];
