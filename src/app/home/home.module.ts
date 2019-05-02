import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { HomeRoutingModuel } from './home-routes.module';

@NgModule({
  declarations: [HomeCompComponent],
  imports: [
    CommonModule,
    HomeRoutingModuel
  ]
})
export class HomeModule { }
