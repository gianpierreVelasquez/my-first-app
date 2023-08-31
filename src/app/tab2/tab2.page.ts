import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  private map!: L.Map;
  coords: any;
  watch: any;

  constructor() {}

  public ngOnInit() {
    this.initialPosition();
  }

  private initializeMap(coords: L.LatLng) {
    this.map = L.map('map', { zoomControl: false })
    .setView([0,0], 17)
    .panTo(coords);

    this._initialMapOptions(this.map);

    this.myCurrentPosition(coords, this.map)
  }

  private myCurrentPosition(coords: L.LatLng, map: L.Map) {
    let icon = new L.Icon({
      iconUrl: 'assets/svg/map-marker.svg',
      iconSize: [38, 95],
    });

    L.marker(coords, {
      icon: icon
    }).addTo(map);
  }

  private initialPosition() {
    Geolocation.getCurrentPosition().then((position) => {
      if (position) {
        this.coords = L.latLng(
          position.coords.latitude,
          position.coords.longitude
        );

        this.initializeMap(this.coords);
      }
    });
  }

  private _initialMapOptions(map: L.Map) {
    L.tileLayer(environment.Leaflet_BaseMap_Url).addTo(map);
  }
}
