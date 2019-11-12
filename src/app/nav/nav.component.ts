import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'my ooo TS app';
  // OR (either will work)
  // appTitle = 'my plain JS app';

  constructor() { }

  ngOnInit() {
  }

}
