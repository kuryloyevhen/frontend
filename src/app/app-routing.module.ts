import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { StoneageComponent } from './core/components/stoneage/stoneage.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomepageComponent },
   { path: 'stoneage', component: StoneageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
