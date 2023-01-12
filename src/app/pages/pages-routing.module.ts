import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Opction1Component } from './opction1/opction1.component';
import { Opction2Component } from './opction2/opction2.component';
import { Opction3Component } from './opction3/opction3.component';
import { Opction4Component } from './opction4/opction4.component';
import { Opction5Component } from './opction5/opction5.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'opcion1',
        component: Opction1Component
      },
      {
        path: 'opcion2',
        component: Opction2Component
      },
      {
        path: 'opcion3',
        component: Opction3Component
      },
      {
        path: 'opcion4',
        component: Opction4Component
      },
      {
        path: 'opcion5',
        component: Opction5Component
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
