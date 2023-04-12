import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './shared/main/main.component';
import { HistoriqueComponent } from './historique/historique.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 {path:'', component: MainComponent, children: [
  { path: 'historique', component: HistoriqueComponent, canActivate: [AuthGuard]  },
{ path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },


]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
