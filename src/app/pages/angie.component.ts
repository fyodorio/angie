import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-angie',
  imports: [],
  template: `
    <p>
      angie works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngieComponent {}
