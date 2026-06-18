import { Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { TestPracticeComponent } from './test-practice/test-practice.component';

export const routes: Routes = [
  { path: '', component: TestPracticeComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'albums', component: AlbumSearchComponent },
];
