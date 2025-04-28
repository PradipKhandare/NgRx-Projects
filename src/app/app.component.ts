import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './store/store';
import { Observable } from 'rxjs';
import { decrement, increment } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-first-counter-application';



  counter$: Observable<number>
  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.pipe(select('count'))
  }

  onClickIncrement() {
    this.store.dispatch(increment())
  }

  onClickDecrement() {
    this.store.dispatch(decrement())
  }
}
