import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page'; // Asegúrate de importar tu página de inicio
import { ExperienciaLaboralPageModule } from './experiencia-laboral/experiencia-laboral.module'; // Reemplaza esto con la ubicación real de tus componentes
import { CertificacionesPageModule } from './certificaciones/certificaciones.module'; // Reemplaza esto con la ubicación real de tus componentes
import { MisDatosPageModule } from './mis-datos/mis-datos.module'; // Reemplaza esto con la ubicación real de tus componentes


@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ZXingScannerModule,
    FormsModule,
    AppRoutingModule,
    ExperienciaLaboralPageModule,
    CertificacionesPageModule,
    MisDatosPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
