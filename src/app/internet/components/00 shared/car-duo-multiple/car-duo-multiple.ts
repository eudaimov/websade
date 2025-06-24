import {Component, Input} from '@angular/core';
import {CardDuo} from '../card-duo/card-duo';

@Component({
  selector: 'carDuoMultiple',
  imports: [
    CardDuo
  ],
  templateUrl: './car-duo-multiple.html',
  styleUrl: './car-duo-multiple.css'
})
export class CarDuoMultiple {
  @Input()
  cards: CardDuo[] | undefined;
}
