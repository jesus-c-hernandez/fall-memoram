import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnDestroy {

  showAnim: boolean = false;

  constructor() {
    
    this.init();
  }

  init() {
    setTimeout( () => {
      this.showAnim = true;
    }, 10);
  }

  ngOnDestroy () {
    this.showAnim = false;
  }
}
