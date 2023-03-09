import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';


@Component({
  selector: 'app-root',
  template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'JPC-TimeMaster';
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    const dropdown = document.querySelector('#dropdown') as HTMLSelectElement;
    const component1 = document.querySelector('#component1') as HTMLDivElement;
    this.updateComponent1(this.settingsService.selectedOption, component1);
  }

  updateComponent1(selectedOption: string, component1: HTMLDivElement) {
    switch (selectedOption) {
      case 'option1':
        component1.style.backgroundImage = 'url("https://wallpapers.com/images/hd/epic-universe-artwork-desktop-121qt3q1jakdvqm8.jpg")';
        break;
      case 'option2':
        component1.style.backgroundImage = 'url("https://wallpaperaccess.com/full/825374.jpg")';
        break;
      case 'option3':
        component1.style.backgroundImage = 'url("https://live.staticflickr.com/7332/15831452533_ae49fe907c_b.jpg")';
        break;
      default:
        component1.style.backgroundImage = 'url("https://wallpapers.com/images/hd/epic-universe-artwork-desktop-121qt3q1jakdvqm8.jpg")';
        break;
    }
  }
}
