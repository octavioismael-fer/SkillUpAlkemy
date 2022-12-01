import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Select from '../../../auth/auth-store/auth.selectors/auth.selectors';

@Component({
  selector: 'ab-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnChanges {

  isLoggedIn$: Observable<any>;
  @Input() public name!: string[];
  @Input() public responsiveIcon: boolean = false;
  showInitials: boolean = true;
  initials!: string;
  circleColor!: string;
  private colors = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2'
  ]
  constructor(private store: Store<any>) {
    this.isLoggedIn$ = this.store.select(Select.isLoggedSelector);
  }
  ngOnInit(): void {

    this.circleColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      this.createInitials();
    }
  }

  createInitials() {
    this.initials = this.name.map(name => name.charAt(0)).join('');
  }
}
