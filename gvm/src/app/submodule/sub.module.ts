import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvHomeComponent } from './env-home/env-home.component';
import { SubRoutingModule } from './sub-routing.module';

@NgModule({
  declarations: [
    EnvHomeComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule
  ]
})
export class SubModule { }