import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-auswertung',
  templateUrl: './auswertung.component.html',
  styleUrls: []
})
export class AuswertungComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    
  }

 
}
