import { Routes } from '@angular/router';
import { FeatureAccessGuard } from './feature-access.guard';

export const routes: Routes = [
    {
        path: 'feature',
        loadChildren: () => import('mfe-one/FeatureModule')
            .then(m => m.FeatureModule),
        canActivate: [FeatureAccessGuard]
    },
];
