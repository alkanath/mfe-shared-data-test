import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnvHomeComponent } from "./env-home/env-home.component";


const routes: Routes = [
    { path:  '', component:  EnvHomeComponent},
    { path:  '**', redirectTo: ''}

];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }