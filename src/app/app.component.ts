import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Platform } from "@angular/cdk/platform";

@Component({
  selector: 'my-root',
  imports: [RouterOutlet],
  template: `
    <main class="my-root">
      <h1>Welcome to {{ title }}!</h1>

      <section>
        <p>Is Safari: {{ platform.SAFARI }}</p>
        <p>Is Chrome: {{ platform.BLINK }}</p>
      </section>

      <router-outlet/>
    </main>
  `,
  styles: `
    .my-root {
      display: flex;
      flex: 1;
      flex-direction: column;
      background-color: var(--secondary-color);
      color: var(--primary-color);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  platform = inject(Platform);

  title = 'angie';
}
