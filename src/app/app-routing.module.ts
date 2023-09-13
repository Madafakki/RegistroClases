import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalPageModule)
  },
  {
    path: 'restcont',
    loadChildren: () => import('./restcont/restcont.module').then(m => m.RestcontPageModule)
  },
  {
    path: 'clase',
    loadChildren: () => import('./clase/clase.module').then(m => m.ClasePageModule)
  },
  {
    path: '', // Esta es la ruta predeterminada cuando la aplicación se carga
    redirectTo: 'login', // Redirige al usuario a la página de inicio de sesión
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
