import { Component, computed } from '@angular/core';
import {UpperCasePipe} from '@angular/common';


@Component({
  selector: 'selector-language',
  // Si estás usando Standalone Components, 'imports' es correcto.
  // Si no, asegúrate de que este componente esté declarado en un NgModule.
  imports: [
    UpperCasePipe
  ],
  templateUrl: './selector-language.html',
  styleUrl: './selector-language.css'
})
export class SelectorLanguage {

  currentLang = computed(()=>{

    const fullBrowserPath = window.location.pathname;
    const pathSegments = fullBrowserPath.split('/');
    const language:string = pathSegments[2];
    console.info("Hola lenguaje")
    if(language==='' || language===undefined || language===null){
      return 'en'
    }

    return language
  }) // Inicializamos con 'es'


  // Signal computada para el idioma al que se desea cambiar (el "otro" idioma)
  langToSwitchTo = computed(() => {
    return this.currentLang() === 'es' ? 'en' : 'es';
  });

  // Signal computada para la imagen de la bandera del idioma al que se desea cambiar
  flagToSwitchTo = computed(() => {
    return this.langToSwitchTo() === 'es' ? 'spa.svg' : 'eng.svg';
  });



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

  }


}
