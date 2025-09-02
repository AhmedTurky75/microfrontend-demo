import { Routes } from '@angular/router';
import { FeatureGuard } from './feature.guard';

export const routes: Routes = [
    {
        path: 'feature',
        loadChildren: () => import('./feature.module').then(m => m.FeatureModule),
        canActivate: [FeatureGuard]
    }
];
