import { Component, importProvidersFrom } from '@angular/core';


@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  peso : number = 0; 
  altura: number = 0;
  result: number = 0;

  calc() {
    this.result = this.peso + (this.altura * this.altura);
  }

}
