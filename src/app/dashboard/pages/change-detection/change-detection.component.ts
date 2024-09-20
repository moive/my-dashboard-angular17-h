import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export default class ChangeDetectionComponent {
  currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );
  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('Done!');
    }, 3000);
  }
}
