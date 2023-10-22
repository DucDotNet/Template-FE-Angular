import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Your route here:

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'appAngularRemote',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
  {
    path: '**',
    //component: NotFoundComponent,
    component: HomeComponent,
  },
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
