import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.component.html',
  styles: []
})
export class EinstellungenComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    const dropdown = document.querySelector('#dropdown') as HTMLSelectElement;
    const component1 = document.querySelector('#component1') as HTMLSelectElement;
    dropdown.value = this.settingsService.selectedOption;
    
    if (dropdown) {
      dropdown.addEventListener('change', () => {
        const selectedOption = dropdown.options[dropdown.selectedIndex].value;
        switch (selectedOption) {
          case 'option1':
            if (component1) {
              component1.style.backgroundImage = 'url("https://wallpapers.com/images/hd/epic-universe-artwork-desktop-121qt3q1jakdvqm8.jpg")';
            }
            break;
          case 'option2':
            if (component1) {
              component1.style.backgroundImage = 'url("https://wallpaperaccess.com/full/825374.jpg")';
            }
            break;
          case 'option3':
            if (component1) {
              component1.style.backgroundImage = 'url("https://live.staticflickr.com/7332/15831452533_ae49fe907c_b.jpg")';
            }
            break;
          default:
            if (component1) {
              component1.style.backgroundImage = 'url("https://wallpapers.com/images/hd/epic-universe-artwork-desktop-121qt3q1jakdvqm8.jpg")';
            }
        }
        this.settingsService.selectedOption = selectedOption;
      });

      switch (this.settingsService.selectedOption) {
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
}
