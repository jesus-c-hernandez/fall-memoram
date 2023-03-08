import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from './components/main-card/main-card.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MainCardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainCardComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
