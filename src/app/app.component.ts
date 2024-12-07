import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'my-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="my-root">
      <my-header/>
      
      <main>
        <router-outlet/>
      </main>
      
      <my-footer/>
    </div>
  `,
  styles: `
    .my-root {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      min-width: 340px;
      width: 100vw;
      background-color: var(--color-background);
      color: var(--color-foreground);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
