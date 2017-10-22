// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// import { APP_BASE_HREF } from '@angular/common';
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { metaReducers, reducers } from './store';
// import { SharedModule } from './shared/shared.module';
// import { WeatherService } from './weather/weather.service';
// import { WeatherEffects } from './store/weather/weather.effects';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FeedEffects } from './store/feed/feed.effects';
// import { ProfileEffects } from './store/profile/profile.effects';
// import { environment } from '../environments/environment';
// import { RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ThemeModule } from './@theme/theme.module';
// import { CoreModule } from './@core/core.module';


import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // SharedModule,
    // FormsModule,
    HttpModule,
    AppRoutingModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    // EffectsModule.forRoot([
    //   ProfileEffects,
    //   FeedEffects,
    //   WeatherEffects
    // ]),
    // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    // RouterModule.forRoot(
    //   routes,
    //   {
    //     useHash: true
    //   }
    // )
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    // WeatherService
  ],
  
})

export class AppModule {}
