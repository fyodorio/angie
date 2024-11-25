import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
  withI18nSupport,
  withIncrementalHydration
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from "@angular/common/http";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(
        withEventReplay(),
        withIncrementalHydration(),
        withI18nSupport()
    ),
    provideHttpClient(withFetch())
  ]
};
