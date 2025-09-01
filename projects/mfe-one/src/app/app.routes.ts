import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'feature', loadChildren: () => import('./feature.module').then(m => m.FeatureModule) }
];
