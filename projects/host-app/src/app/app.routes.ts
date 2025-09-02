import { Routes } from '@angular/router';
import { FeatureAccessGuard } from './feature-access.guard';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {

        path: 'feature',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe-one',
        exposedModule: './FeatureModule'
      })
        .then(m => m.FeatureModule),


    // path: 'feature',
    // loadChildren: () => import('mfe-one/FeatureModule')
    //     .then(m => m.FeatureModule),
    // canActivate: [FeatureAccessGuard]
    },
];
