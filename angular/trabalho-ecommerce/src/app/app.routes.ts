import { CartCompleteComponent } from './pages/cart-complete/cart-complete.component';
import { Routes } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";

export const ROUTES: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: MainPageComponent },
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "cart-complete", component: CartCompleteComponent },
  {path: "products/:id", component: ProductDetailsComponent}
];
