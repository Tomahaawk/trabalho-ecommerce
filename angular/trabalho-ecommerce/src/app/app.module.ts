import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './pages/products/products.service';
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductComponent } from './pages/products/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartCompleteComponent } from './pages/cart-complete/cart-complete.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TopbarComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ProductGridItemComponent,
    ProductComponent,
    FooterComponent,
    CartCompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true
    }),
    FormsModule
  ],
  providers: [
    ShoppingCartService,
    ProductsService,
    {
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
