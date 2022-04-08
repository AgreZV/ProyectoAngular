import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { DetailshopComponent } from './shop/pages/detailshop/detailshop.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'profile', component:ProfileComponent, canActivate:[AuthGuard] },
  { path: '', pathMatch:'full', redirectTo:'/home' },
  { path: 'contactus', component:ContactusComponent },
  { path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule), canActivate:[AuthGuard]},
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: 'shop/:id', component: DetailshopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

