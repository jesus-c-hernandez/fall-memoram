import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnDestroy{

  moveLoadingOne :boolean = false;
  moveLoadingTwo : boolean = false;

  constructor() {
    this.init();
  }

  init() {
    setTimeout( () => {
      this.moveLoadingOne = true;
    }, 10);
    setTimeout( () => {
      this.moveLoadingTwo = true;
    }, 1500);
  }

  ngOnDestroy(){
    this.moveLoadingOne = false;
  }
}
