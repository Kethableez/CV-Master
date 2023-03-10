import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGuard } from './core/guards/data.guard';

const routes: Routes = [
  { path: 'start', loadChildren: () => import('./start/start.module').then(m => m.StartModule) },
  { path: 'creator', loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule) },
  { path: 'creator-v2', loadChildren: () => import('./creator-v2/creator-v2.module').then(m => m.CreatorV2Module) },
  {
    path: '**',
    redirectTo: 'start'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
