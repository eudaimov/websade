import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabaja-page',
  imports: [],
  templateUrl: './trabaja.html',
  styleUrl: './trabaja.css',
  standalone: true
})
export class Trabaja implements OnInit{
 ngOnInit():void{
   window.location.href='https://www.google.es'
}
}
