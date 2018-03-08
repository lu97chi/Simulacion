import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { app_routing} from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParacaidasComponent } from './tareas/paracaidas/paracaidas.component';
import { NewmanComponent } from './tareas/newman/newman.component';
import { NumerosaleatoriosComponent } from './tareas/numerosaleatorios/numerosaleatorios.component';
import { MedioscuadradosComponent } from './tareas/medioscuadrados/medioscuadrados.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ParacaidasComponent,
    NewmanComponent,
    NumerosaleatoriosComponent,
    MedioscuadradosComponent,
    HomeComponent
  ],
  imports: [
    app_routing,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
