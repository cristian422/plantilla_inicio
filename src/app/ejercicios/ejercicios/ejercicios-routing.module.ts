import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PruebaComponent } from './prueba/prueba.component';
import { GalleryPageComponent } from './gallery/gallery-page.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'calculadora',
      component: PruebaComponent,
      data: {
        title: 'calculadora'
      }
    },{
      path:'gallery',
      component:GalleryPageComponent,
      data:{
        title:'gallery'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
