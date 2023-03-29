import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [ 
  {
    path: 'gvm',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.gvmUrl,
      exposedModule: './GvmModule',
    }).then(m => m.SubModule)
  },{
    path: 'optimus',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.optimusUrl,
      exposedModule: './OptimusModule',
    }).then(m => m.ChildModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
