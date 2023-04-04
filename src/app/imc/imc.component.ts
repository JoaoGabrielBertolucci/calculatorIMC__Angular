import { Component, importProvidersFrom } from '@angular/core';


@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  num1 : number = 0; 

  calc() {
    this.num1 = 1 + 1;
  }

}
