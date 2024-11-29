import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-landing',
  imports: [],
  template: `
    <div class="content-area">
      <section id="hero">
        <h2>Hero</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pharetra lacus. Fusce a feugiat
          turpis. Ut ut pharetra magna. Curabitur tincidunt nunc vel odio finibus sollicitudin. Aenean malesuada
          semper risus quis consectetur. Donec semper vestibulum metus vitae eleifend. Integer sit amet convallis
          ligula. Aenean orci purus, ultrices a fermentum sit amet, condimentum a dui. Sed ornare, ex ac aliquet
          consectetur, nisi elit sagittis lorem, et condimentum sapien ante a sapien. Donec iaculis sodales ligula
          et hendrerit. Donec sagittis arcu sed nunc vestibulum, mollis efficitur metus semper. Nulla neque eros,
          accumsan eu placerat eget, elementum vitae neque. Fusce faucibus dignissim elit ut porta. Nulla non quam
          in neque aliquet venenatis. Curabitur auctor facilisis bibendum. Ut convallis pellentesque leo, sit amet
          condimentum lacus mattis eu.

          Cras at velit elementum, placerat justo non, accumsan ligula. In ultricies dui ac nisl dignissim, quis
          suscipit mi semper. Curabitur vitae lorem at arcu laoreet consectetur vel ac mi. Vivamus nec pharetra
          erat. Ut ligula nisi, hendrerit vitae rutrum at, tempus ut quam. Proin convallis nec arcu sodales
          molestie. Etiam semper ipsum metus, ultricies interdum leo pellentesque a. Maecenas suscipit mi ligula,
          sed commodo leo lacinia pharetra. Etiam imperdiet, tellus ut ultrices tincidunt, mauris ipsum semper
          tortor, sed dapibus lectus tellus eu nulla. Aenean vitae elit leo. Donec lobortis neque et sem iaculis
          varius.

          Mauris sed suscipit magna. Nunc blandit dui magna. Ut lacinia augue velit, id semper quam malesuada in.
          Suspendisse placerat nisi vel ligula fermentum, eu volutpat nisi ullamcorper. Pellentesque vulputate, arcu
          non tempus gravida, metus nunc accumsan lacus, nec congue odio elit vel felis. Duis vehicula pretium sem,
          sed commodo turpis ornare id. Nunc ac felis gravida, efficitur nisl eget, rhoncus nisi. Donec vitae
          ultricies odio, non blandit velit. Quisque porttitor magna eget mauris efficitur tempus.

          Sed ornare ligula nec congue tristique. Aliquam posuere viverra facilisis. Curabitur scelerisque
          condimentum magna, eget aliquet sem lacinia ut. Nulla malesuada lacus mauris, eget hendrerit augue
          consectetur id. Aliquam non hendrerit tellus. Cras eget aliquet nibh, ut imperdiet arcu. Nulla facilisi.
          In lobortis leo in turpis mattis, in malesuada ligula tristique. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Fusce ornare cursus velit sit amet facilisis.
          Maecenas vitae nisi et libero bibendum porttitor. Nam blandit volutpat diam, ut tempus sapien eleifend at.
          Aliquam erat volutpat.</p>
      </section>
      <section id="value">
        <h2>Value</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pharetra lacus. Fusce a feugiat
          turpis. Ut ut pharetra magna. Curabitur tincidunt nunc vel odio finibus sollicitudin. Aenean malesuada
          semper risus quis consectetur. Donec semper vestibulum metus vitae eleifend. Integer sit amet convallis
          ligula. Aenean orci purus, ultrices a fermentum sit amet, condimentum a dui. Sed ornare, ex ac aliquet
          consectetur, nisi elit sagittis lorem, et condimentum sapien ante a sapien. Donec iaculis sodales ligula
          et hendrerit. Donec sagittis arcu sed nunc vestibulum, mollis efficitur metus semper. Nulla neque eros,
          accumsan eu placerat eget, elementum vitae neque. Fusce faucibus dignissim elit ut porta. Nulla non quam
          in neque aliquet venenatis. Curabitur auctor facilisis bibendum. Ut convallis pellentesque leo, sit amet
          condimentum lacus mattis eu.

          Cras at velit elementum, placerat justo non, accumsan ligula. In ultricies dui ac nisl dignissim, quis
          suscipit mi semper. Curabitur vitae lorem at arcu laoreet consectetur vel ac mi. Vivamus nec pharetra
          erat. Ut ligula nisi, hendrerit vitae rutrum at, tempus ut quam. Proin convallis nec arcu sodales
          molestie. Etiam semper ipsum metus, ultricies interdum leo pellentesque a. Maecenas suscipit mi ligula,
          sed commodo leo lacinia pharetra. Etiam imperdiet, tellus ut ultrices tincidunt, mauris ipsum semper
          tortor, sed dapibus lectus tellus eu nulla. Aenean vitae elit leo. Donec lobortis neque et sem iaculis
          varius.

          Mauris sed suscipit magna. Nunc blandit dui magna. Ut lacinia augue velit, id semper quam malesuada in.
          Suspendisse placerat nisi vel ligula fermentum, eu volutpat nisi ullamcorper. Pellentesque vulputate, arcu
          non tempus gravida, metus nunc accumsan lacus, nec congue odio elit vel felis. Duis vehicula pretium sem,
          sed commodo turpis ornare id. Nunc ac felis gravida, efficitur nisl eget, rhoncus nisi. Donec vitae
          ultricies odio, non blandit velit. Quisque porttitor magna eget mauris efficitur tempus.

          Sed ornare ligula nec congue tristique. Aliquam posuere viverra facilisis. Curabitur scelerisque
          condimentum magna, eget aliquet sem lacinia ut. Nulla malesuada lacus mauris, eget hendrerit augue
          consectetur id. Aliquam non hendrerit tellus. Cras eget aliquet nibh, ut imperdiet arcu. Nulla facilisi.
          In lobortis leo in turpis mattis, in malesuada ligula tristique. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Fusce ornare cursus velit sit amet facilisis.
          Maecenas vitae nisi et libero bibendum porttitor. Nam blandit volutpat diam, ut tempus sapien eleifend at.
          Aliquam erat volutpat.</p>
      </section>
      <section id="features">
        <h2>Features</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pharetra lacus. Fusce a feugiat
          turpis. Ut ut pharetra magna. Curabitur tincidunt nunc vel odio finibus sollicitudin. Aenean malesuada
          semper risus quis consectetur. Donec semper vestibulum metus vitae eleifend. Integer sit amet convallis
          ligula. Aenean orci purus, ultrices a fermentum sit amet, condimentum a dui. Sed ornare, ex ac aliquet
          consectetur, nisi elit sagittis lorem, et condimentum sapien ante a sapien. Donec iaculis sodales ligula
          et hendrerit. Donec sagittis arcu sed nunc vestibulum, mollis efficitur metus semper. Nulla neque eros,
          accumsan eu placerat eget, elementum vitae neque. Fusce faucibus dignissim elit ut porta. Nulla non quam
          in neque aliquet venenatis. Curabitur auctor facilisis bibendum. Ut convallis pellentesque leo, sit amet
          condimentum lacus mattis eu.

          Cras at velit elementum, placerat justo non, accumsan ligula. In ultricies dui ac nisl dignissim, quis
          suscipit mi semper. Curabitur vitae lorem at arcu laoreet consectetur vel ac mi. Vivamus nec pharetra
          erat. Ut ligula nisi, hendrerit vitae rutrum at, tempus ut quam. Proin convallis nec arcu sodales
          molestie. Etiam semper ipsum metus, ultricies interdum leo pellentesque a. Maecenas suscipit mi ligula,
          sed commodo leo lacinia pharetra. Etiam imperdiet, tellus ut ultrices tincidunt, mauris ipsum semper
          tortor, sed dapibus lectus tellus eu nulla. Aenean vitae elit leo. Donec lobortis neque et sem iaculis
          varius.

          Mauris sed suscipit magna. Nunc blandit dui magna. Ut lacinia augue velit, id semper quam malesuada in.
          Suspendisse placerat nisi vel ligula fermentum, eu volutpat nisi ullamcorper. Pellentesque vulputate, arcu
          non tempus gravida, metus nunc accumsan lacus, nec congue odio elit vel felis. Duis vehicula pretium sem,
          sed commodo turpis ornare id. Nunc ac felis gravida, efficitur nisl eget, rhoncus nisi. Donec vitae
          ultricies odio, non blandit velit. Quisque porttitor magna eget mauris efficitur tempus.

          Sed ornare ligula nec congue tristique. Aliquam posuere viverra facilisis. Curabitur scelerisque
          condimentum magna, eget aliquet sem lacinia ut. Nulla malesuada lacus mauris, eget hendrerit augue
          consectetur id. Aliquam non hendrerit tellus. Cras eget aliquet nibh, ut imperdiet arcu. Nulla facilisi.
          In lobortis leo in turpis mattis, in malesuada ligula tristique. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Fusce ornare cursus velit sit amet facilisis.
          Maecenas vitae nisi et libero bibendum porttitor. Nam blandit volutpat diam, ut tempus sapien eleifend at.
          Aliquam erat volutpat.</p>
      </section>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {}
