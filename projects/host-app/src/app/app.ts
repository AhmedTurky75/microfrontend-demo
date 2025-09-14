import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { CustomRemoteConfig, CustomManifest } from './utils/config';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// export class App {
//   protected readonly title = signal('host-app');
// }

export class App implements OnInit  {

  remotes: CustomRemoteConfig[] = [];

  constructor(
    private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    const manifest = getManifest<CustomManifest>();

    // Hint: Move this to an APP_INITIALIZER 
    //  to avoid issues with deep linking
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);

    this.remotes = Object.values(manifest);
  }
}
