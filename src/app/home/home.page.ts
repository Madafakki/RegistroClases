import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scannerResult: string = '';

  title = 'ANGULARQRSCANNER';

  onCodeResult(result: string) {
    this.scannerResult = result;
  }
  constructor() { }

}
