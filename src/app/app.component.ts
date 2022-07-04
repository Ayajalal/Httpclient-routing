import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
stepper: any;


constructor(    private location: LocationStrategy
  ){
    history.pushState(null, window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, window.location.href);
        this.stepper.previous();
    });
  }
  }

