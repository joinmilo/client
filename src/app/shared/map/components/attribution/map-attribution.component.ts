import { Component } from '@angular/core';

/**
 * This is a copy of the standard leaflet attribution, included here
 * simply for easier positioning.
 */
@Component({
  selector: 'app-map-attribution',
  template: `
    <a href="https://leafletjs.com" title="A JavaScript library for interactive maps"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"></path><path fill="#FFD500" d="M0 4h12v3H0z"></path><path fill="#E0BC00" d="M0 7h12v1H0z"></path></svg> Leaflet</a> <span aria-hidden="true">|</span> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
  `,
  styles: [`
    :host{
      padding: 0 1em;
      background-color: rgba(255, 255, 255, 0.7);
    }
  `]
})
export class MapAttributionComponent {}
