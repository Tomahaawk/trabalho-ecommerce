import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";
import { RouterModule } from "@angular/router";

import { MainPageComponent } from "./pages/main-page/main-page.component";
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent, 
    TopbarComponent, 
    ProductsComponent, 
    ProductDetailsComponent, 
    ShoppingCartComponent, ProductGridItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
