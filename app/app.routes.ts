import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [{
  path: '',
  pathMatch: 'prefix',
  redirectTo: 'dashboard'
}, {
  path: 'heroes',
  component: HeroesComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
