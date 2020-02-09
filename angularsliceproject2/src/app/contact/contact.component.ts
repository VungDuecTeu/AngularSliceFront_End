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


  color: ThemePalette = 'primary';
  value = 50;
  bufferValue = 75;
  
  fooditemscollapse = [false,false,false,false,false,false];
  step = 0;

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
