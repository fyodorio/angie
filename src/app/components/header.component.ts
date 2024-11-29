import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-header',
  imports: [
    NgOptimizedImage,
    TitleCasePipe,
    RouterLink
  ],
  template: `
    <header>
      <div class="content-area content-butterfly">
        <a class="brand" [routerLink]="'/'">
          <img ngSrc="logo.png" width="48" height="48" priority alt="brand logo">
          <h1>{{ title | titlecase }}</h1>
        </a>
        <nav>
          <ul role="list">
            <li><a href="#value">Value</a></li>
            <li><a href="#features">Features</a></li>
            <li><a class="btn" [routerLink]="'/app'">Get started</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: `
    :host { display: block; width: 100%; }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  title = 'angie starter';
}
