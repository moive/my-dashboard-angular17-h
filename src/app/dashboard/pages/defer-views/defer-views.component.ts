import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styles: ``,
})
export default class DeferViewsComponent {
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('Loaded!');
  }
}
