import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NovaCampanhaComponent } from './nova-campanha/nova-campanha.component';
import { ListaCampanhaComponent } from './lista-campanha/lista-campanha.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    ComponentsModule,
    HomeRoutingModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent, 
    DashboardComponent, 
    NovaCampanhaComponent, 
    ListaCampanhaComponent, 
  ]
})
export class HomeModule { }
