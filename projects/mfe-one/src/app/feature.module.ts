import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentGuard } from './first-component.guard';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstComponent,
    // canActivate: [FirstComponentGuard]
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [FirstComponentGuard]
  }
];

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminModule
  ]
})
export class FeatureModule { }
