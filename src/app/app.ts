import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './internet/components/navbar/navbar.component';
import { initFlowbite } from 'flowbite';
import {Footer} from './internet/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App implements OnInit{
  protected title = 'grupoSADE';
  ngOnInit(): void {
    initFlowbite();
  }

}
