import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey= "6143b53e2d04d4aa25e904c60d065f69";
  url: string = "";

  constructor(private httpClient: HttpClient) { 
    this.url = `https://api.darksky.net/forecast/${this.apiKey}/`;
    // ?units=si&lang=es&[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]`
  }

  getLocation(address: string){
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGhpZXJyeWhlcm1lcyIsImEiOiJjandpY2F3dGMwMXZsNGJtZ3VlOG5ldTl6In0.P-3JNjYcCagao_-AFQigzQ&limit=1`;
    return this.httpClient.get(url);
  }

  getWeather(longitude: string, latitude: string){
    return this.httpClient.get(`${this.url}${latitude},${longitude}`) 
  }
}
