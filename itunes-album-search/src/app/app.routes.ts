import { Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { AlbumSearchComponent } from './album-search/album-search.component';

export const routes: Routes = [
  { path: '', component: FlightComponent }, // default
  { path: 'albums', component: AlbumSearchComponent },
];
