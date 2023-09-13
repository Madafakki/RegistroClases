import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {
  usuario: string = '';
  contrasena: string = '';
  qrData: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParams) => {
      this.usuario = queryParams.get('user') ?? '';
      this.contrasena = queryParams.get('pass') ?? '';
      this.qrData = queryParams.get('qrData') ?? '';
    });
  }

}