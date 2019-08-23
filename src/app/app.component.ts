import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'weather-app-angular';
  longitude: any;
  latitude: any;
  location: any;
  res: any;
  res2: any;
  // let longitude, latitude, location;

  constructor(private weatherService: WeatherService){}

  async ngOnInit(){

    // this.weatherService.getLocation('london')
    // .subscribe(
    //   res => {
    //     console.log(res['features'][0].center[0]);
    //     this.longitude = res['features'][0].center[0];
    //     this.latitude = res['features'][0].center[1];
    //     this.location = res['features'][0].place_name;
    //   },
    //   err => console.log(err)
    // )

    this.res = await this.weatherService.getLocation('london').toPromise();
    console.log(this.res);
    console.log(this.res['features'][0].center[0]);
    this.longitude = this.res['features'][0].center[0];
    this.latitude = this.res['features'][0].center[1];
    this.location = this.res['features'][0].place_name;
    console.log()

    // this.res2 = await this.weatherService.getWeather(this.longitude, this.latitude).toPromise();
    // console.log(this.res2);
    this.weatherService.getWeather(this.longitude, this.latitude)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
