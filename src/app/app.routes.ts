import {Routes} from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {CataloguePanelComponent} from './Components/catalogue-panel/catalogue-panel.component';
import {ProductFactoryComponent} from './Components/ProductFactory/product-factory/product-factory.component';
import {FavoritesComponent} from './Components/Favorites/favorites/favorites.component';
import {CartComponent} from './Components/Cart/cart/cart.component';
import {RegisterComponent} from './Components/Register/register/register.component';

export const routes: Routes =
  [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'catalogue',component :CataloguePanelComponent},
    {path: 'ProductFactory',component :ProductFactoryComponent},
    {path: 'Favorites',component :FavoritesComponent},
    {path: 'Cart',component :CartComponent},
    {path: 'register',component :RegisterComponent},
  ]
;
