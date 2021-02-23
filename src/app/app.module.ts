import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { CartComponent } from './component/main-component/cart/cart.component';
import { FilterComponent } from './component/main-component/filter/filter.component';
import { ProductComponent } from './component/main-component/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponentComponent,
    CartComponent,
    FilterComponent,
    ProductComponent,
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
