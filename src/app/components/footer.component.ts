import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'my-footer',
  imports: [],
  template: `
    <footer>
      <div class="content-area content-butterfly">
        <div>Copyright © 2024 fyodor.io</div>
        <div>
          <p>Is Safari: {{ platform.SAFARI }} @if (platform.SAFARI) {
            ✅
          } @else {
            🚫
          }</p>
          <p>Is Firefox: {{ platform.FIREFOX }} @if (platform.FIREFOX) {
            ✅
          } @else {
            🚫
          }</p>
          <p>Is Chrome: {{ platform.BLINK }} @if (platform.BLINK) {
            ✅
          } @else {
            🚫
          }</p>
        </div>
      </div>
    </footer>
  `,
  styles: `:host { display: block; width: 100%; } `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  platform = inject(Platform);
}
