import { ChildRoutingModule } from './child-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions/actions.component';
import { DeployComponent } from './deploy/deploy.component';

@NgModule({
  declarations: [
    ActionsComponent,
    DeployComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
