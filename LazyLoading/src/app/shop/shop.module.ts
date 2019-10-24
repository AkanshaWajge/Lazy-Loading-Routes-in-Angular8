import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [CartComponent, CheckoutComponent, ConfirmComponent],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
