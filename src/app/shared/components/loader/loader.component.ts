import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  _loading = true;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this._loading = true;
  }

  hide() {
    this._loading = false;
  }

}
