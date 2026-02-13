import { Component, input, inject, signal, OnChanges, SimpleChanges, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    [innerHTML]="svgContent()"
    class="flex items-center justify-center fill-current w-full h-full"
  ></div>`,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class IconComponent {
  // 1. Icon nomi (assets/icons/save.svg -> 'save')
  name = input.required<string>();

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  // 2. SVG kodini shu yerda saqlaymiz
  svgContent = signal<SafeHtml | null>(null);

  constructor() {
    // 3. EFFECT: Qachonki "name" o'zgarsa, yangi faylni yuklaymiz
    effect(() => {
      const iconName = this.name();
      if (iconName) {
        this.loadIcon(iconName);
      }
    });
  }

  private loadIcon(iconName: string) {
    // Assets papkasidan o'qish
    this.http.get(`assets/icons/${iconName}.svg`, { responseType: 'text' }).subscribe({
      next: (svg) => {
        // Xavfsizlik uchun sanitizatsiya qilamiz va signalga yozamiz
        this.svgContent.set(this.sanitizer.bypassSecurityTrustHtml(svg));
      },
      error: () => {
        console.error(`Icon topilmadi: ${iconName}`);
        this.svgContent.set(null);
      },
    });
  }
}
