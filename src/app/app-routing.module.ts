import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/login/guards/auth.guard';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: MenuComponent, canActivate: [AuthGuard], children: [
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)},
    { path: 'profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then( m => m.UserProfileModule)},
    ]
  },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
