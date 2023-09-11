import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  scannerResult: string = '';

  title = 'ANGULARQRSCANNER';

  onCodeResult(result: string) {
    this.scannerResult = result;
  }
  constructor() { }
}
