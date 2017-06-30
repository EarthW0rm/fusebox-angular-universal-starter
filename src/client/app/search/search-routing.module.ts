import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'search', component: SearchComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SearchRoutingModule { }