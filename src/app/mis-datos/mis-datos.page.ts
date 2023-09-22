import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-datos',
  templateUrl: 'mis-datos.page.html',
  styleUrls: ['mis-datos.page.scss'],
})
export class MisDatosPage {
  certificado: any = null;

  constructor(private route: ActivatedRoute) { }

  ionViewWillEnter() {
    // Recuperar datos de certificado de los parámetros
    this.route.queryParams.subscribe((params) => {
      if (params && params['state'] && params['state'].certificado) {
        this.certificado = params['state'].certificado;
      }
    });
  }
}
