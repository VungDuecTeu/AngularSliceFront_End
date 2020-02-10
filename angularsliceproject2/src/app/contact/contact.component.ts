import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor() { }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  
  panelOpenState = false;


  color: ThemePalette = 'primary';
  value = 50;
  bufferValue = 75;
  
  fooditemscollapse = [false,false,false,false,false,false];
  step = 0;

  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.33159, lng: 105.63233, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 }
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  fooditemCollapse(item:number){
    for (let i:number = 0; i < this.fooditemscollapse.length; i++){
      this.fooditemscollapse[i] = false;
    }

      this.fooditemscollapse[item] = !this.fooditemscollapse[item];
    }

    lat = 40.730610;
    lng = -73.935242;
    coordinates = new google.maps.LatLng(this.lat, this.lng);
    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

  ngOnInit() {
    setTimeout(()=> {
      // Put the logic here 

    //   this.location = {
    //     latitude: -28.68352,
    //     longitude: -147.20785,
    //     mapType: "satelite",
    //     zoom: 5,
    //     markers: [
    //         {
    //             lat: -28.68352,
    //             lng: -147.20785,
    //             label: "new york"
    //         }
    //     ]
    // }
  
      const mapProperties = {
        center: new google.maps.LatLng(35.2271, -80.8431),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
   };



 this.map = new google.maps.Map(this.gmap.nativeElement, mapProperties);
 this.marker.setMap(this.map);

      }, 1000);
  }

  
}
