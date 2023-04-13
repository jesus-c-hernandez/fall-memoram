import { Component, OnDestroy } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnDestroy {
  // moveLoadingOne :boolean = false;
  // moveLoadingTwo : boolean = false;

  constructor(public loadingService: LoadingService) {
    // this.init();
  }

  // init() {
  //   setTimeout( () => {
  //     this.moveLoadingOne = true;
  //   }, 10);
  //   setTimeout( () => {
  //     this.moveLoadingTwo = true;
  //   }, 2500);
  // }

  ngOnDestroy() {
    // this.moveLoadingOne = false;
  }
}
