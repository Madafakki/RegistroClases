import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segment: string = 'experiencia-laboral'; // Segmento inicial

  usuario: string = "";
  contrasena: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    // Tu código de inicialización aquí
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.usuario = parametros?.extras.state['user'];
      this.contrasena = parametros?.extras.state['pass'];
    }
  }

  volver() {
    let parametros: NavigationExtras = {
      state: {
        user: this.usuario,
        pass: this.contrasena
      },
      replaceUrl: true
    };
    this.router.navigate(['login'], parametros);
  }

  irAScannerQR() {
    // Navegar al scanner QR y pasar los datos de usuario y contraseña
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario,
        pass: this.contrasena
      }
    };
    this.router.navigate(['principal'], navigationExtras);
  }

  segmentChanged(event: any) {
    const selectedSegment = event.detail.value;

    // Actualizar la ruta según el segmento seleccionado
    this.router.navigate(['/home/' + selectedSegment]);
  }
}


