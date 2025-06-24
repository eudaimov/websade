import {Component, computed, Input} from '@angular/core';
import {CardColor} from '../../../interfaces/carColor';

@Component({
  selector: 'color-component',
  imports: [],
  templateUrl: './colorcomponent.html',
  styleUrl: './colorcomponent.css'
})
export class Colorcomponent {
  @Input()
  cards:CardColor[] = [];
  @Input()
  color:string = '#000000';
  @Input()
  titulo:string = '';
  @Input()
  columns:number = 3;

  columnSelect = computed(() => {
    this.columns
    if(this.columns === 4){
      return  "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";
    } else if(this.columns === 6){
      return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
    }
    else{
      return "grid-cols-1 lg:grid-cols-3";
    }
  })
}
