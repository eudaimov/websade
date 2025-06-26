import { Component } from '@angular/core';
import {Demoformulario} from '../../components/demoformulario/demoformulario';

@Component({
  selector: 'app-demo',
  imports: [
    Demoformulario
  ],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo {

}
