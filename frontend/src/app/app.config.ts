import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// השורה החשובה שאת צריכה להוסיף:
import { provideHttpClient } from '@angular/common/http'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // השורה החשובה שאת צריכה להוסיף כאן:
    provideHttpClient() 
  ]
};