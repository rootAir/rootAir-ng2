// import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import { Store } from '@ngrx/store';
// import { IAppState } from './store/index';
// import { USER_GET } from './store/profile/profile.actions';
import { Component, OnInit } from '@angular/core';
// import { AnalyticsService } from './@core/utils/analytics.service';


@Component({
  // selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  // observable$: Observable<{}>;

  // constructor(http: Http, store: Store<IAppState>) {
  //   this.observable$ = http
  //     .get('/api/public/simple')
  //     .map((response: Response) => response.json());

  //   debugger
  //   store.dispatch({
  //     type: USER_GET
  //   });
  // }
  // constructor(private analytics: AnalyticsService) {
  // }

  ngOnInit(): void {
    // debugger
    // this.analytics.trackPageViews();
  }

}
