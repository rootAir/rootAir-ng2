import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import {
//   NbAuthComponent,
//   NbLoginComponent,
//   NbLogoutComponent,
//   NbRegisterComponent,
//   NbRequestPasswordComponent,
//   NbResetPasswordComponent,
// } from '@nebular/auth';


const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  // { path: '', pathMatch: 'full', redirectTo: ''},
  // { path: '', pathMatch: 'full', redirectTo: 'weather'},
  // { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  // { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  // { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'weather' }
  // {
  //   path: 'auth',
  //   // component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       // component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       // component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       // component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       // component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       // component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       // component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
