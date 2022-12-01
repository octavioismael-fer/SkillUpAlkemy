import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() id! : number;
  @Input() email!: string;
  @Input() points!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
