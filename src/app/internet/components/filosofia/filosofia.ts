import {Component, computed, signal} from '@angular/core';
import {Titulosection} from '../titulosection/titulosection';

@Component({
  selector: 'filosofia',
  imports: [
    Titulosection
  ],
  templateUrl: './filosofia.html',
  styleUrl: './filosofia.css'
})
export class Filosofia {
  valores =signal<string>('')
  mision = signal<string>('hidden');
  vision = signal<string>('hidden');
  valoresSelect = computed(()=>{
    if(this.valores()=='hidden')
    return ''
    else return 'select';
  })
  misionSelect = computed(()=>{
    if(this.mision()=='hidden')
      return ''
    else return 'select';
  })
  visionSelect = computed(()=>{
    if(this.vision()=='hidden')
      return ''
    else return 'select';
  })


  verTab(tab:string){
    this.valores.set('hidden');
    this.mision.set('hidden');
    this.vision.set('hidden');
    switch(tab){
      case 'valores':
        this.valores.set('');
        break
      case 'mision':
        this.mision.set('');
        break
      case 'vision':
        this.vision.set('');
        break
    }
}

}
