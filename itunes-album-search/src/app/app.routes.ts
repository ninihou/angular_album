import { Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { TestPracticeComponent } from './test-practice/test-practice.component';
import { UndoableCounterComponent } from './undoable-counter/undoable-counter.component';
import { MortgageCaculatorComponent } from './mortgage-caculator/mortgage-caculator.component';
import { CrudComponent } from './crud/crud.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'albums', component: AlbumSearchComponent },
  { path: 'counter', component: UndoableCounterComponent},
  { path: 'mortmage', component: MortgageCaculatorComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'userprofile', component: UserProfileComponent},
  
];
