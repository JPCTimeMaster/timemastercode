import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuswertungComponent } from "./auswertung/auswertung.component";
import { EinstellungenComponent } from "./einstellungen/einstellungen.component";
import { StartseiteComponent } from "./startseite/startseite.component";

const APP_ROUTES: Routes = [
    {path: 'startseite', component: StartseiteComponent},
    {path: 'auswertung', component: AuswertungComponent},
    {path: 'einstellungen', component: EinstellungenComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
