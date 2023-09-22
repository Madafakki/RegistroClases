import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: 'experiencia-laboral.page.html',
  styleUrls: ['experiencia-laboral.page.scss'],
})
export class ExperienciaLaboralPage {
  empresa: string = '';
  anoInicio: string = '';
  actualmenteTrabaja: boolean = false;
  anoTermino: string = '';
  cargo: string = '';

  constructor(private router: Router) { }

  guardarExperienciaLaboral() {
    // Validar y guardar los datos en el almacenamiento local
    const experienciaLaboral = {
      empresa: this.empresa,
      anoInicio: this.anoInicio,
      actualmenteTrabaja: this.actualmenteTrabaja,
      anoTermino: this.actualmenteTrabaja ? null : this.anoTermino,
      cargo: this.cargo,
    };

    // Guardar los datos en localStorage (opcional)
    // ...

    // Redirigir a la página "Mis Datos" y pasar datos como parámetros
    const navigationExtras: NavigationExtras = {
      state: {
        experienciaLaboral: experienciaLaboral,
      },
    };
    this.router.navigate(['/home/mis-datos'], navigationExtras);
  }

  limpiarFormulario() {
    // Limpiar el formulario
    this.empresa = '';
    this.anoInicio = '';
    this.actualmenteTrabaja = false;
    this.anoTermino = '';
    this.cargo = '';
  }
}
