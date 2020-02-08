import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  ngOnInit() {
    setTimeout(()=> {
      // Put the logic here 
      const mapProperties = {
        center: new google.maps.LatLng(35.2271, -80.8431),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
   };
 this.map = new google.maps.Map(this.gmap.nativeElement,    mapProperties);
     
      }, 1000);
  }

}
