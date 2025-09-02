import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export interface RemoteRouteConfig {
  path: string;
  remoteName: string;
  exposedModule: string;
  remoteEntry: string;
  moduleClass: string;
}
@Injectable({ providedIn: 'root' })
export class DynamicRoutesService {
  constructor(private http: HttpClient, private router: Router) {}

  init(): void {
    this.http.get<RemoteRouteConfig[]>('/assets/routes.json').subscribe(configs => {
        console.log(configs);

      const newRoutes = configs.map(c => ({
        path: c.path,
        loadChildren: () => {
          console.log(`[Dynamic Federation] Loading MFE route: ${c.path}`);
          console.log(`[Dynamic Federation] RemoteEntry URL: ${c.remoteEntry}`);
          console.log(`[Dynamic Federation] Exposed Module: ${c.exposedModule}`);
          
          return loadRemoteModule({
            type: 'module',
            remoteEntry: c.remoteEntry,
            exposedModule: c.exposedModule,
            
          }).then(m => {
            console.log(`[Dynamic Federation] Successfully loaded module: ${c.moduleClass}`);
            return m[c.moduleClass];
          }).catch(err => {
            console.error(`[Dynamic Federation] Failed to load module: ${c.moduleClass}`, err);
            throw err;
          });
        }
      }));

      console.log('[Dynamic Federation] Adding routes:', newRoutes);
      this.router.resetConfig([...this.router.config, ...newRoutes]);
      console.log('[Dynamic Federation] Final Router Config:', this.router.config);

    });
  }
}