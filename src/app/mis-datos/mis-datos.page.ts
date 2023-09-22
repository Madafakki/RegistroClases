import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-datos',
  templateUrl: 'mis-datos.page.html',
  styleUrls: ['mis-datos.page.scss'],
})
export class MisDatosPage {
  usuario: string = '';
  contrasena: string = '';
  certificado: any = null;
  experienciaLaboral: any = null;

  constructor(private router: Router) {
    // Obtener la navegación actual
    const navigation = this.router.getCurrentNavigation();

    // Verificar si navigation existe y tiene extras
    if (navigation && navigation.extras && navigation.extras.state) {
      this.usuario = navigation.extras.state['user'];
      this.contrasena = navigation.extras.state['pass'];
      this.certificado = navigation.extras.state['certificado'];
      this.experienciaLaboral = navigation.extras.state['experienciaLaboral'];
    }
  }
}
