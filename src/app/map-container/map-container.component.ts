import { Component } from '@angular/core';

@Component({
  selector: 'map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent {
  options: google.maps.MapOptions = {
    center: { lat: -19.0156152, lng: 29.669159413582094 },
    zoom: 7.5,
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
  };

  markers1 = { position: { lat: -20.071406445135597, lng: 30.834114526385203 } }
  markers2 = { position: { lat: -19.463488423586245, lng: 29.815216522652253 } }
  markers3 = { position: { lat: -19.644202300839176, lng: 31.159243303341224 } }
  markers4 = { position: { lat: -18.33415105655602, lng: 29.917015042021553 } }
  markers5 = { position: { lat: -18.21716090912866, lng: 28.94232254261445 } }
  markers6 = { position: { lat: -17.62320220264731, lng: 27.340464360003743 } }
  markers7 = { position: { lat: -17.372161582959908, lng: 30.178982880568352 } }
  markers8 = { position: { lat: -18.35586297890985, lng: 26.50011969063126 } }
  markers9 = { position: { lat: -18.93015709803839, lng: 27.759404052215338 } }
  markers10 = { position: { lat: -20.943023883448937, lng: 29.006640292243173 } }
  markers11 = { position: { lat: -20.48873033005424, lng: 27.810687714216648 } }
  markers12 = { position: { lat: -17.81722226332076, lng: 31.056154029778718 } }

  markers = [this.markers1, this.markers2, this.markers3, this.markers4, this.markers5, this.markers6, this.markers7, this.markers8, this.markers9, this.markers10, this.markers11, this.markers12]



}
