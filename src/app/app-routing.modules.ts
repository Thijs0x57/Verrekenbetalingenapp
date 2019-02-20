import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { CalculatorComponent } from './calculator/calculator.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: '**', redirectTo: '/overview', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
