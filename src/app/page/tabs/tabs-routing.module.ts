import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'principal',
        loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
      },
      {
        path: 'busqueda',
        loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
