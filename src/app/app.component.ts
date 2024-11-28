import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Platform } from "@angular/cdk/platform";

@Component({
  selector: 'my-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <p>Is Safari: {{ platform.SAFARI }}</p>
    <p>Is Chrome: {{ platform.BLINK }}</p>

    <router-outlet/>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  platform = inject(Platform);
  title = 'angie';
}
