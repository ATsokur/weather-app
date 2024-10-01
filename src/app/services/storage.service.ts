import { Injectable } from '@angular/core';
import { WeatherConfigurations } from '../interfaces/weather-configurations';
import { City } from '../interfaces/city';
import { CITIES } from './weather-data.service';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private userCheckboxStorageData: string = 'user-checkbox-storage-data';
  private userSelectCityStorageData: string = 'user-select-city-storage-data';
  private authenticationStorageData: string = 'isLoggedIn';


  constructor() { }

  isConfigAvailable(): boolean {
    return !!localStorage.getItem(this.userCheckboxStorageData);
  }

  setUserCheckboxSettings(data: WeatherConfigurations) {
    localStorage.setItem(this.userCheckboxStorageData, JSON.stringify(data));
  }

  setUserSelectSettings(data: City) {
    localStorage.setItem(this.userSelectCityStorageData, JSON.stringify(data));
  }

  setAuthenticationData() {
    localStorage.setItem(this.authenticationStorageData, '1');
  }

  getSavedCity() {
    return CITIES.find((c) => c.id === localStorage.getItem(''));
  }

  getUserCheckboxSettings() {
    let data = localStorage.getItem(this.userCheckboxStorageData);
    if(!!data){
      return JSON.parse(data);
    }
  }

  getUserSelectSettings() {
    let data = localStorage.getItem(this.userSelectCityStorageData);
    if(!!data){
      return JSON.parse(data);
    }
  }

  getAuthenticationData() {
    let data = localStorage.getItem(this.authenticationStorageData);
    return data;
  }

  clearUserCheckboxSettings() {
    localStorage.removeItem(this.userCheckboxStorageData);
  }

  clearUserSelectSettings() {
    localStorage.removeItem(this.userSelectCityStorageData);
  }

  clearAuthenticationData() {
    localStorage.removeItem(this.authenticationStorageData);
  }


  cleanAll() {
    localStorage.clear()
  }

}



