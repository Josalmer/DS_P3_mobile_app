import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit {

  @Input() layoutContentScrollable = true;

  constructor() {}

  ngOnInit() {}

}
