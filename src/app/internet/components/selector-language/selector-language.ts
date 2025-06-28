import { Component, OnInit, signal, computed } from '@angular/core';
import { filter } from 'rxjs'; // Asegúrate de que esto sea 'rxjs' o 'rxjs/operators' según tu configuración
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'selector-language',
  // Si estás usando Standalone Components, 'imports' es correcto.
  // Si no, asegúrate de que este componente esté declarado en un NgModule.
  imports: [],
  templateUrl: './selector-language.html',
  styleUrl: './selector-language.css'
})
export class SelectorLanguage implements OnInit {

  currentLang = signal<string>('es'); // Inicializamos con 'es'

  private supportedLocales: string[] = ['es', 'en'];
  private defaultLocale: string = 'es'; // Tu sourceLocale en angular.json

  // Signal computada para el idioma al que se desea cambiar (el "otro" idioma)
  langToSwitchTo = computed(() => {
    return this.currentLang() === 'es' ? 'en' : 'es';
  });

  // Signal computada para la imagen de la bandera del idioma al que se desea cambiar
  flagToSwitchTo = computed(() => {
    return this.langToSwitchTo() === 'es' ? 'spa.svg' : 'eng.svg';
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Establece el idioma inicial basándose en la URL del navegador
    this.setCurrentLanguage();

    // Suscríbete a los eventos del router para actualizar el idioma
    // cuando la navegación finalice (cambio de ruta).
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Al navegar, volvemos a determinar el idioma basándonos en la URL del navegador.
        // No pasamos event.urlAfterRedirects directamente aquí,
        // ya que setCurrentLanguage usará window.location.pathname para la fuente más fiable del prefijo de idioma.
        this.setCurrentLanguage();
      });
  }

  /**
   * Determina y establece el idioma actual de la aplicación basándose en la URL del navegador.
   * Utiliza window.location.pathname para obtener la ruta completa, incluyendo el prefijo de idioma.
   */
  private setCurrentLanguage(): void {
    // window.location.pathname devuelve la ruta completa del navegador, ej: "/es/conocenos" o "/en/"
    const fullBrowserPath = window.location.pathname;

    // Divide la ruta para encontrar el prefijo de idioma
    // Ej: ["", "es", "conocenos"] -> "es"
    const pathSegments = fullBrowserPath.split('/');
    const potentialLocale = pathSegments[2]; // El primer segmento después de la raíz '/'

    if (this.supportedLocales.includes(potentialLocale)) {
      this.currentLang.set(potentialLocale);
    } else {
      // Si no se encuentra un prefijo de idioma válido, se asume el idioma por defecto.
      this.currentLang.set(this.defaultLocale);
    }
  }

  /**
   * Cambia el idioma de la aplicación recargando la página con la URL del nuevo idioma.
   * Mantiene la ruta actual de la aplicación (sin el prefijo de idioma).
   * @param targetLang El código del idioma al que se desea cambiar (ej. 'es', 'en').
   */
  switchLanguage(targetLang: string): void {
    // if (this.currentLang() === targetLang) {
    //   return; // Ya estamos en este idioma, no hacemos nada
    // }
    console.info(targetLang)
    if(targetLang ==='es'){
      console.info('Entrando en español')
      window.location.href= '/websade/es'
    }else{
      console.info('Entrando en ingles')
      window.location.href= '/websade/en'
    }

    // const currentAppPath = this.router.url;
    // const newUrl = `${window.location.origin}/${targetLang}${currentAppPath}`;
    //
    // window.location.href = newUrl;
  }


}
