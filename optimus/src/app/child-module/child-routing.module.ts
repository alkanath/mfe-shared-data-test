import { ActionsComponent } from './actions/actions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeployComponent } from './deploy/deploy.component';

const routes: Routes = [
    { path:  '', component:  ActionsComponent},
    { path:  'deploy', component:  DeployComponent},
    { path:  '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }