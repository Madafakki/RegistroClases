import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {
  usuario: string = '';
  contrasena: string = '';
  qrData: string = '';
  profesor: string = '';
  hora: string = '';
  sala: string = '';
  dia: string = '';

  // Para acceder a datos específicos, puedes hacer algo como esto:

  constructor(private router: Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.usuario = parametros?.extras.state['user'];
      this.contrasena = parametros?.extras.state['pass'];
      this.qrData = parametros?.extras.state['qrData'];

      // Dividir la qrData cuando tengas un valor
      if (this.qrData) {
        const partes = this.qrData.split(',');

        // Asegúrate de que haya suficientes partes antes de acceder a ellas
        if (partes.length >= 4) {
          this.profesor = partes[0].split(':')[1].trim();
          this.hora = partes[1].split(':')[1].trim();
          this.sala = partes[2].split(':')[1].trim();
          this.dia = partes[3].split(':')[1].trim();
        }
      }
    }
  }
}