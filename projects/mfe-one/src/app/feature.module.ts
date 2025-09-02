import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentGuard } from './first-component.guard';

const routes: Routes = [
    // { path: '', redirectTo: 'first', pathMatch: 'full' },
    {
        path: 'first',
        component: FirstComponent,
        //canActivate: [FirstComponentGuard]
    },
    { path: 'second', component: SecondComponent }
];

@NgModule({
    declarations: [FirstComponent, SecondComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class FeatureModule { }
