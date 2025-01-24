import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  imports: [CommonModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  items: string[] = [];



  addToArray(value: string) {

    if (value) {

      this.items.push(value);

    }

  }

}
