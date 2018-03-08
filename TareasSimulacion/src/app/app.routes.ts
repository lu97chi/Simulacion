import { RouterModule, Routes } from '@angular/router';
import { ParacaidasComponent } from './tareas/paracaidas/paracaidas.component';
import { MedioscuadradosComponent } from './tareas/medioscuadrados/medioscuadrados.component';
import { HomeComponent } from './home/home.component';
import { NewmanComponent } from './tareas/newman/newman.component';

const app_routes: Routes = [
    { path: 'paracaidas', component: ParacaidasComponent},
    { path: 'home', component: HomeComponent},
    { path: 'cuadrados', component: MedioscuadradosComponent},
    { path: 'newman', component: NewmanComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
  
  export const app_routing = RouterModule.forRoot(app_routes);