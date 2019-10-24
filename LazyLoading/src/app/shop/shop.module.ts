import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';

import { routes } from './shop.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, CheckoutComponent, ConfirmComponent],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ShopModule { }
