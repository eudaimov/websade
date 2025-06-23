import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input, // Importar Input
} from '@angular/core';
import {Titulosection} from '../titulosection/titulosection';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contador implements AfterViewInit, OnDestroy {
  @ViewChild('numeradorDiv') numeradorDiv!: ElementRef<HTMLDivElement>;

  private observer?: IntersectionObserver;

  // Convertimos a Inputs con valores por defecto
  @Input() initialCounterValue: number = 0;
  @Input() targetCounterValue: number = 100;
  @Input() animationDuration: number = 2000;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    // Si el elemento ya está visible al cargar, y no hay scroll,
    // podrías querer iniciar la animación aquí directamente o
    // asegurarte de que el IntersectionObserver lo capture.
    // Por ahora, lo dejamos con el IntersectionObserver.
    this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Se activa cuando al menos el 10% es visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetElement = entry.target as HTMLDivElement;
        if (entry.isIntersecting) {
          this.numerar(targetElement);
        } else {
          // Cuando se oculta, reseteamos al valor inicial del Input
          targetElement.innerHTML = this.initialCounterValue.toString();
          this.cdr.detectChanges(); // Notificar a Angular del cambio
        }
      });
    }, options);

    if (this.numeradorDiv && this.numeradorDiv.nativeElement) {
      this.observer.observe(this.numeradorDiv.nativeElement);
    } else {
      console.warn(
        'Elemento numeradorDiv no encontrado para IntersectionObserver.'
      );
    }
  }

  // Función numerar ahora usa los Inputs directamente
  numerar(obj: HTMLDivElement): void {
    let startTimestamp = 0;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / this.animationDuration, // Acceso directo a la propiedad Input
        1
      );
      obj.innerHTML = Math.floor(
        progress * (this.targetCounterValue - this.initialCounterValue) + // Acceso directo
        this.initialCounterValue // Acceso directo
      ).toString();

      this.cdr.detectChanges(); // Notificar a Angular del cambio

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
