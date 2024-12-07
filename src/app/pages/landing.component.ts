import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';

import { HeroComponent } from '../components/hero.component';
import { NgOptimizedImage } from '@angular/common';
import { FeatureItem } from '../models/feature-item.model';
import { FeatureItemComponent } from '../components/feature-item.component';

@Component({
  selector: 'my-landing',
  imports: [
    HeroComponent,
    NgOptimizedImage,
    FeatureItemComponent
  ],
  template: `
    <section>
      <section id="hero">
        <div class="content-area">
          <my-hero
            [heroContent]="{ title: 'Build modern Angular apps with ease', subtitle: 'Angie is the modern opinionated barebones Angular starter project generated using Angular CLI and enriched with the latest and experimental framework features (but not spoiled by unnecessary 3rd-party dependencies'}"
          />
          <section class="scroller">
            <a href="#value">
              <img ngSrc="icons/scroller.svg" width="40" height="40" alt="scroll down to discover more">
            </a>
          </section>
        </div>
      </section>

      <section id="value">
        <article class="content-area">
          <h2 class="centered-text">Everything you really need to create a full-stack Angular web app</h2>
          <p class="landing-message">Don't over-bloat your starter boilerplate with unnecessary dependencies you will
            need to maintain through endless pain and suffering, use what the framework provides you with
            out-of-the-box</p>
          <img ngSrc="img/all-the-data-pana.png" width="512" height="512" alt="all in one metaphor">
        </article>
      </section>

      <section id="features">
        <article class="content-area">
          <h2>Explore the default features</h2>
          @for (feature of features(); track feature.title) {
            <my-feature-item [featureItem]="feature"/>
          }
        </article>
      </section>

      <section id="cta">
        <div class="content-area">
          <my-hero
            [heroContent]="{ title: 'Congratulations — your endless search is over 🎉', subtitle: 'Use the free open-source Angie starter now to build your new perfect shiny new app 🛠️', actionTitle: 'Get started now', actionRedirectUrl: '/app'}"
          />
        </div>
      </section>
    </section>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    #hero {
      padding-bottom: 3rem;
    }

    #value {
      background-color: var(--color-tertiary);
    }

    #features {
      background-color: var(--color-secondary);
      color: var(--color-white);
    }

    .scroller {
      margin-top: 5rem;
      padding-bottom: 0;
    }

    @media (max-width: 640px) {
      .scroller {
        margin-top: 1rem;
      }

      #hero {
        padding-top: 2rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
  features: WritableSignal<FeatureItem[]> = signal([
    {
      title: 'SSR with hybrid rendering',
      subtitle: 'The most modern and efficient approach to rendering web pages',
      imageUrl: 'img/hybrid-car-rafiki.png',
      imageAltText: 'hybrid car as hybrid rendering metaphor',
      isReverse: false
    },
    {
      title: 'API routes with Express.js',
      subtitle: 'No need for a separate back end — use integrated minimal trusted Node.js framework',
      imageUrl: 'img/toll-road-cuate.png',
      imageAltText: 'toll road gates as API routes metaphor',
      isReverse: true
    },
    {
      title: 'Zoneless change detection',
      subtitle: 'Break through the limits of conventional Zone.js abstractions and go lightweight',
      imageUrl: 'img/breaking-barriers-amico.png',
      imageAltText: 'a man breaking a brick wall as a metaphor for zoneless change detection',
      isReverse: false
    },
    {
      title: 'Angular CDK and animation',
      subtitle: 'Use robust and accessible headless component primitives from the framework team to build your own bespoke UIs',
      imageUrl: 'img/construction-costs-amico.png',
      imageAltText: 'construction building blocks as CDK metaphor',
      isReverse: true
    },
    {
      title: 'Plain CSS stylesheets',
      subtitle: 'Stick with simple modern CSS approach instead of complex heavy unnecessary libraries',
      imageUrl: 'img/forest-pana.png',
      imageAltText: 'nature as a plain CSS metaphor',
      isReverse: false
    },
    {
      title: 'And much much more',
      subtitle: 'All the latest and greatest innovations in Angular and Web APIs without the burden of unnecessary 3rd party dependencies',
      imageUrl: 'img/niche-service-marketplace-amico.png',
      imageAltText: 'mobile marketplace app as a metaphor for multiple options of ecosystem tools',
      isReverse: true
    }
  ])
}
