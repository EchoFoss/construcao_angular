import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'cliente', loadChildren: () => import("./clientes/clientes.module").then(c => c.ClientesModule)},
];
