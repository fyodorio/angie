import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
  withI18nSupport,
  withIncrementalHydration
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(
      withEventReplay(),
      withIncrementalHydration(),
      withI18nSupport()
    ),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ]
};
