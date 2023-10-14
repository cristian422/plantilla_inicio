import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },{
    path: 'ejercicios',
    loadChildren: () => import('../../ejercicios/ejercicios/ejercicios.module').then(m => m.EjerciciosModule)
}
];
