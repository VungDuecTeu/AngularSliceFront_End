import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {} from 'googlemaps';
import { MatDialog } from '@angular/material';
import { ConfirmDialogModel, ConfirmationboxComponent } from '../helpercomponents/confirmationbox/confirmationbox.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  
  panelOpenState = [false,false,false,false,false];
  indexexpand: number = -1;
  confirmationtitle = "test";
  confirmationcontent = "confirmationcontent";
  showconfirmationbox = false;

  constructor() {

  }

  coordinates = [
    new google.maps.LatLng(35.22,  -80.84),
    new google.maps.LatLng(25.775, -80.208),
    new google.maps.LatLng(40.439, -79.976),
    new google.maps.LatLng(42.3580, -71.06),
    new google.maps.LatLng(39.633, -79.950),
  ];

  markers = [];

  citylabels = ["Charlotte", "Miami", "Pittsburgh", "Boston", "Morgantown"];
  names = ["Rai Sai", "Mai Sai", "Hamlet Lazz", "Robert Joe", "Sarah Jones"];
  emails = ["kai912@gmail.com", "mai912@gmail.com", "ham912@gmail.com ", "tao112@gmail.com", "kam321@gmail.com "]
  addresses = ["3215 Freedon Dr", "20 Commerce Dr", "2110 Railroad Ave", "793 Boston Rd", "374 Patteson Drive"]
  phonenumbers = ["704-313-4313", "786-123-1321", "412-431-3241", "617-421-9221", "304-122-1111"];

  ngOnInit() {

    for (let x:number = 0; x < this.coordinates.length; x++)
    {
      this.markers.push(new google.maps.Marker({
        position: this.coordinates[x],
        map: this.map

      }));
    }
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  changelocation(i:number){

    this.indexexpand = i == this.indexexpand ? -1 : i;
    this.map.setCenter(this.coordinates[i]);
  }

  mapInitializer() {
    let x = {
      lat: this.markers[0].lat, lng:this.markers[0].lng
    }
    const mapProperties = {
      center: this.coordinates[0],
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
 };
 
    this.map = new google.maps.Map(this.gmap.nativeElement, mapProperties);
    for (let i:number = 0; i < this.markers.length; i++)
      this.markers[i].setMap(this.map);

  }
  
}
