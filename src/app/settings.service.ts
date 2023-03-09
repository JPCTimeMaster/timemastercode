import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  selectedOption = 'option1';
  constructor() { }
}
