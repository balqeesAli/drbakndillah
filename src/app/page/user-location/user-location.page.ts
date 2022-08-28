import { Component, OnInit } from '@angular/core';
// import { AfterViewInit , ViewChild} from '@angular/core';


// declare const google: any;


@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.page.html',
  styleUrls: ['./user-location.page.scss'],
})
export class UserLocationPage implements OnInit {


// export class UserLocationPage implements OnInit ,AfterViewInit {

  // public map;
  // public geoCoder;
  // public marker;
  // @ViewChild('mapElement' , {static: false}) mapElement;
  // public formattedAddress;

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit():void{

  //   const myLatlng = new google.maps.LatLng(23.5919362, 58.429305);
  //   this.geoCoder = new google.aps.Geocoder();

  //   const mapOptions = {
  //     center: myLatlng,
  //     zoom: 15
  //   }


  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
  //   this.marker = new google.maps.Marker({
  //     position:myLatlng,
  //     map:this.map,
  //     draggable: true,
  //     title: 'Drag me!'
  //   });

  //   google.maps.event.addListener(this.marker, 'dragend' , () =>{
  //     this.geocodePosition(this.marker.getPosition());

  //   });
  // }

  // }

}
