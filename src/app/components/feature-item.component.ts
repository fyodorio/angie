import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { FeatureItem } from '../models/feature-item.model';

@Component({
  selector: 'my-feature-item',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  template: `
    <div class="feature-item" [ngClass]="{ 'reversed': featureItem().isReverse }">
      <img [ngSrc]="featureItem().imageUrl" width="256" height="256" [alt]="featureItem().imageAltText">
      <article>
        <h3>{{ featureItem().title }}</h3>
        <p class="landing-message">{{ featureItem().subtitle }}</p>
      </article>
    </div>
  `,
  styles: `
    :host { display: block; width: 100%; }
    
    .feature-item {
      display: flex;
      gap: 1.5rem;
      width: 100%;
    }

    .reversed {
      flex-direction: row-reverse;
    }

    article {
      align-items: start;
    }

    p {
      text-align: start;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureItemComponent {
  featureItem = input.required<FeatureItem>();
}
