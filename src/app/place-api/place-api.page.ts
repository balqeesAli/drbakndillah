import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { combineLatest } from 'rxjs';
import { Storage } from '@capacitor/storage';
// import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ModalController, NavParams } from '@ionic/angular';
 

@Component({
  selector: 'app-place-api',
  templateUrl: './place-api.page.html',
  styleUrls: ['./place-api.page.scss'],
})
export class PlaceApiPage implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  cureent_latitude = Storage.get({ key: 'cureent_latitude' });
  // JSON.parse(language.value)
  center = { lat: 24, lng: 12 };
  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 15;
  // display?: google.maps.LatLngLiteral;
  display: any;
  SelectedLocation = {
    "Latitude": "",
    "Longitude": "",
    "Selected_address":""
  }
  Selected_address;
  modalTitle: string;
  modelId: number;
  selectlocationView = 0;


  constructor(private nativeGeocoder: NativeGeocoder,
              private modalController: ModalController,
              private navParams: NavParams
              ) {
    this.UserCurrentLocation();

  }



  ngOnInit() {
    // console.table(this.navParams);
    // this.modelId = this.navParams.data.paramID;
    // this.modalTitle = this.navParams.data.paramTitle;
  }




  async closeModal() { 
    if(this.SelectedLocation.Latitude == "" || this.SelectedLocation.Longitude == ""){
      this.SelectedLocation.Latitude = JSON.stringify(this.markerPositions[0].lat);
      this.SelectedLocation.Longitude =  JSON.stringify(this.markerPositions[0].lng);;
      // console.log(this.markerPositions);

    }
    console.log(this.SelectedLocation);
    this.GetSeletedAddress();




      const onClosedData: any = this.SelectedLocation;
      console.log(this.SelectedLocation);
    await this.modalController.dismiss(onClosedData);
  }


  async GetSeletedAddress(){

    //Get User Position 
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(parseFloat(this.SelectedLocation.Latitude), parseFloat(this.SelectedLocation.Longitude), options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]));
        this.Selected_address = result[0].countryName +","+result[0].administrativeArea+","+result[0].locality+","+result[0].subLocality+","+result[0].thoroughfare;
       this.SelectedLocation.Selected_address =  this.Selected_address;
        console.log(this.Selected_address);

      })
      .catch((error: any) => console.log(error));

  }

  async UserCurrentLocation() {
    const cureent_latitude = await Storage.get({ key: 'cureent_latitude' });
    console.log(JSON.parse(cureent_latitude.value));
    const cureent_longitude = await Storage.get({ key: 'cureent_longitude' });
    console.log(JSON.parse(cureent_longitude.value));
    this.center = { lat: JSON.parse(cureent_latitude.value), lng: JSON.parse(cureent_longitude.value) };
    this.markerPositions = [{ "lat": JSON.parse(cureent_latitude.value), "lng": JSON.parse(cureent_longitude.value) }];

  }


  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions = [];
    this.markerPositions.push(event.latLng.toJSON());
    // console.log(event.latLng.toJSON());
    this.display = event.latLng.toJSON();
    console.log(this.display);
    this.SelectedLocation.Latitude = this.display.lat;
    this.SelectedLocation.Longitude = this.display.lng;

    this.GetSeletedAddress();

    //Get the location

    // { "latitude": 23.5921885, "longitude": 58.4469734, "countryCode": "OM",
    //  "countryName": "Oman", "postalCode": "", "administrativeArea": "Muscat Governorate",
    //   "subAdministrativeArea": "", "locality": "Muscat", "subLocality": "Madinat As Sultan Qaboos",
    //    "thoroughfare": "Dawat Al Adab Street", "subThoroughfare": "201", "areasOfInterest": ["201"] }

  
      this.selectlocationView = 1;

  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
    console.log("openInfoWindow");
  }

  removeLastMarker() {
    this.markerPositions.pop();
    console.log("Remove");
  }


}
