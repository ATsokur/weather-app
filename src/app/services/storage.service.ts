import { Injectable } from '@angular/core';
import { WeatherConfigurations } from '../interfaces/weather-configurations';
// import { WeatherConfigurations } from '../interfaces/weather-configurations';
// import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private userCheckboxStorageData: string = 'user-checkbox-storage-data';

  constructor() { }

  isConfigAvailable(): boolean {
    return !!localStorage.getItem(this.userCheckboxStorageData);
  }

  setSettings(data: WeatherConfigurations) {
    localStorage.setItem(this.userCheckboxStorageData, JSON.stringify(data));
  }

  getUserSettings() {
    let data = localStorage.getItem(this.userCheckboxStorageData);
    if(!!data){
      return JSON.parse(data);
    }
  }

  clearUserSettings() {
    localStorage.removeItem(this.userCheckboxStorageData);
  }

  cleanAll() {
    localStorage.clear()
  }

}



