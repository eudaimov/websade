import {Component, computed, signal} from '@angular/core';
import {internetRoute} from '../../../internet.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SelectorLanguage} from '../../selector-language/selector-language';

interface MenuItem {
  titulo: string,
  route: string,
  color: string,
}

const internetRoutes = internetRoute[0].children ?? [];

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    SelectorLanguage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {



  showNavBar = signal(false);
  showNavBarComputed = computed(()=>{
    if(!this.showNavBar()){
      return 'menuCerrado'
    }else{
      return 'menuAbierto'
    }
  })

  toogleShowNavBar(){
    this.showNavBar.update(value => !value)
  }

  internetMenu: MenuItem[] = internetRoutes
    .filter(item => item.data && item.data['category'] === 'principal')
    .map((item) => {
      return {
        titulo: `${item.title}`,
        route: `/${item.path}`,
        color: ``,
      }
    })

  internetMenuSecondary: MenuItem[] = internetRoutes
    .filter(item => item.data && item.data['category'] === 'secondary')
    .map((item) => {
      const colorFromData = item.data ? item.data['color'] : undefined;
      return {
        titulo: `${item.title}`,
        route: `/${item.path}`,
        color: colorFromData === undefined ? '#000' : `${colorFromData}`,
      }
    })

  redirigirToInfoJob() {
    window.location.href='https://www.infojobs.net/sade-consultoria-tecnica/em-i807556524534104290635214955119/ofertas'
  }
}
