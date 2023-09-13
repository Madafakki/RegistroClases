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

  constructor(private router: Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.usuario = parametros?.extras.state['user'];
      this.contrasena = parametros?.extras.state['pass'];
      this.qrData = parametros?.extras.state['qrData']
    }
  }


}