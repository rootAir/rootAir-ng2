import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
