import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'jok';
  update: boolean;
  public joke: any;

  constructor(updates: SwUpdate, private dataService: DataService) {
    updates.available.subscribe(ev => {
      updates.activateUpdate().then(() => document.location.reload());
    })
  }
  ngOnInit() {
    this.dataService.giveJokes().subscribe(res => {
      this.joke = res;
    })
  }
}
