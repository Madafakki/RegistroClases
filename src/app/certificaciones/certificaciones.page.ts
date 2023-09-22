import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-certificaciones',
  templateUrl: 'certificaciones.page.html',
  styleUrls: ['certificaciones.page.scss'],
})
export class CertificacionesPage {
  nombreCertificado: string = '';
  fechaObtencion: string = '';
  certificadoVencido: boolean = false;
  fechaVencimiento: string = '';

  constructor(private router: Router) { }

  guardarCertificado() {
    // Validar y guardar los datos en el almacenamiento local
    const certificado = {
      nombreCertificado: this.nombreCertificado,
      fechaObtencion: this.fechaObtencion,
      certificadoVencido: this.certificadoVencido,
      fechaVencimiento: this.certificadoVencido ? this.fechaVencimiento : null,
    };

    // Guardar los datos en localStorage (opcional)
    // ...

    // Redirigir a la página "Mis Datos" y pasar datos como parámetros
    const navigationExtras: NavigationExtras = {
      state: {
        certificado: certificado,
      },
    };
    this.router.navigate(['/home/mis-datos'], navigationExtras);
  }

  limpiarFormulario() {
    // Limpiar el formulario
    this.nombreCertificado = '';
    this.fechaObtencion = '';
    this.certificadoVencido = false;
    this.fechaVencimiento = '';
  }
}
