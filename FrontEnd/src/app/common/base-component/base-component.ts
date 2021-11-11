import {Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnDestroy {

  constructor (){}

  subscription: any;
  subscriptionDropDowns: any;

  public ngOnDestroy(){
    this.unsubscribe();
  }

  public unsubscribe(): void{
    if(this.subscription != undefined){
      this.subscription.unsubscribe();
    }
    if(this.subscriptionDropDowns != undefined){
      this.subscriptionDropDowns.unsubscribe();
    }
  }
}
