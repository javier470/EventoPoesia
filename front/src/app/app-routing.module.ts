import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetResultsComponent } from './components/get-results/get-results.component';
import { SendFormComponent } from './components/send-form/send-form.component';

const routes: Routes = [
  {path: '', component: SendFormComponent},
  {path: 'results', component: GetResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
