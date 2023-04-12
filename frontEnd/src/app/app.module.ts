import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriqueComponent } from './historique/historique.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './shared/main/main.component';
import { EditpassComponent } from './shared/editpass/editpass.component';
import { ParamArroComponent } from './shared/paramArro/paramArro.component';

@NgModule({
  declarations: [	
    AppComponent,
    HistoriqueComponent,
    LoginComponent,
    DashboardComponent,
      SidebarComponent,
      MainComponent,
     EditpassComponent,
ParamArroComponent   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
