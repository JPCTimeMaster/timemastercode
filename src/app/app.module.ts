import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AufgabenfelderComponent } from './aufgabenfelder/aufgabenfelder.component';
import { KalenderComponent } from './kalender/kalender.component';
import { AuswertungComponent } from './auswertung/auswertung.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { CategoryService } from './aufgabenfelder/category.service';



@NgModule({
  declarations: [
    AppComponent,
    AufgabenfelderComponent,
    KalenderComponent,
    AuswertungComponent,
    HeaderComponent,
    EinstellungenComponent,
    StartseiteComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
