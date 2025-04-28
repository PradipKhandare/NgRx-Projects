import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  count: Observable<number>;

  constructor(
    public store: Store<AppState>
  ){
    this.count = this.store.pipe(select('count'));
  }


}
