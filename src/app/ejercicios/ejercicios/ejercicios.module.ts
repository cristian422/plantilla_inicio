import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { GalleryPageComponent } from './gallery/gallery-page.component';


@NgModule({
  declarations: [PruebaComponent,GalleryPageComponent],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
  ]
})
export class EjerciciosModule { }
