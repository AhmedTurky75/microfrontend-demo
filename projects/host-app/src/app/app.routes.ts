import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'feature',
        loadChildren: () => import('mfe-one/FeatureModule')
            .then(m => m.FeatureModule)
    },

];
