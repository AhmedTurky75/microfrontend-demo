// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
// import { provideRouter, Router } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { routes } from './app/app.routes';
// import { DynamicRoutesService } from './Servicecs/dynamic-routes.service';
// bootstrapApplication(App, {
//   providers: [
//     provideHttpClient(),
//     provideRouter(routes),
//   ],
// })
// .then(appRef => {
//   const injector = appRef.injector;
//   const dynamicRoutes = injector.get(DynamicRoutesService);
//   dynamicRoutes.init();
// });


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
