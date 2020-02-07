import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => {
            // Put the logic here 
            const mapProperties = {
                center: new google.maps.LatLng(35.2271, -80.8431),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.gmap.nativeElement, mapProperties);
        }, 1000);
    }
};
tslib_1.__decorate([
    ViewChild('mapContainer', { static: false })
], ContactComponent.prototype, "gmap", void 0);
ContactComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map