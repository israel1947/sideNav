import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { Opction1Component } from './opction1/opction1.component';
import { Opction2Component } from './opction2/opction2.component';
import { Opction3Component } from './opction3/opction3.component';
import { Opction4Component } from './opction4/opction4.component';
import { Opction5Component } from './opction5/opction5.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    Opction1Component,
    Opction2Component,
    Opction3Component,
    Opction4Component,
    Opction5Component,

    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
