
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';

export const routes: Routes = [
  { path: '', component: BoutiqueComponent, pathMatch: 'full' },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  /*
  loadChildren expects a function that uses the dynamic import syntax to import your lazy-loaded module only when it’s needed. 
  As you can see, the dynamic import is promise-based and gives you access to the module, where the module’s class can be called. 
  */
  { path: '**', component: BoutiqueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
