import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-duo',
  imports: [],
  templateUrl: './card-duo.html',
  styleUrl: './card-duo.css',
  standalone: true
})
export class CardDuo {

  @Input()
  title: string | undefined;

  @Input()
  description: string | undefined;

  @Input()
  image: string | undefined;
  @Input()
  picturesDescription: string[] | undefined;
  @Input({required: true})
  par: boolean | undefined ;



}
