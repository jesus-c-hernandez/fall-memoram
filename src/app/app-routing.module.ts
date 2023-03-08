import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { SoloModeComponent } from './modules/solo-mode/solo-mode.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'solo',
    component: SoloModeComponent,
  },
  { path: '**', pathMatch: 'full', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
