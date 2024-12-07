import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { HeroContent } from '../models/hero-content.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-hero',
  imports: [
    RouterLink
  ],
  template: `
    <article>
      <h2>{{ heroContent().title }}</h2>
      <p class="centered-text landing-message">{{ heroContent().subtitle }}</p>
      @if (heroContent().actionTitle) {
        <a class="btn btn-cta" [routerLink]="heroContent().actionRedirectUrl">{{ heroContent().actionTitle }}</a>
      }
    </article>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  heroContent = input.required<HeroContent>();
}
