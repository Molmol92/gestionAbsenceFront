import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssiduiteComponent } from './assiduite/assiduite.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatiereComponent } from './matiere/matiere.component';
import { CalendarComponent } from './calendar/calendar.component';



import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AssiduiteService } from './service/assiduite.service';
import { SelectionneurSeanceComponent } from './navbar/selectionneur-seance/selectionneur-seance.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './service/profile.service';
import { Role } from './enum/role.enum';
import { UiSwitchModule } from 'ngx-ui-switch';
import {EtudiantService} from "./service/etudiant.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import {ReactiveFormsModule} from '@angular/forms';
import { compteEnseignant } from './compteEnseignant/compteEnseignant.component';
import { compteEtudiant } from './compteEtudiant/compteEtudiant.component';
import { Etudiant } from './entity/etudiant';
import { TokenInterceptorService } from './service/token-interceptor.service';




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [

    AppComponent,
    AssiduiteComponent,
    ProfileComponent,
    NavbarComponent,
    MatiereComponent,
    CalendarComponent,
    SelectionneurSeanceComponent,
    ListEtudiantComponent,
    LoginComponent,
    ProfileComponent,
    compteEnseignant,
    compteEtudiant
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    UiSwitchModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    ProfileService,
    MatDatepickerModule,
    EtudiantService,
    SelectionneurSeanceComponent,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
