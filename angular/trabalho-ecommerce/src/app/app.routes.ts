
import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductsComponent } from './pages/products/products.component';

export const ROUTES: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {  path: 'home', component: MainPageComponent },
  { path: 'products', component: ProductsComponent }

]

