import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-chart',
  standalone: true,
  template: `
    <div class="p-6 bg-purple-600 text-white rounded-xl shadow-2xl animate-bounce">
      <h2 class="text-2xl font-bold">📊 Katta Statistika</h2>
      <p>Bu komponent juda og'ir edi, lekin siz uni chaqirdingiz!</p>
      <div class="mt-4 grid grid-cols-3 gap-2">
        <div class="h-20 bg-purple-400 rounded"></div>
        <div class="h-32 bg-purple-300 rounded"></div>
        <div class="h-16 bg-purple-500 rounded"></div>
      </div>
    </div>
  `,
  styles: []
})
export class HeavyChartComponent {
  // Komponent yuklanganda konsolga yozadi
  constructor() {
    console.log("Heavy Chart Component yuklandi! 📦");
  }
}