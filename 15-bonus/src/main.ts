import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbnJkZXYiLCJhIjoiY2x4bHAxbWkyMDA0eTJyc2Uwa2pycm5seiJ9.AJrqKT787bxs7LHcLtREvg';

if (!navigator.geolocation) {
  alert('El navegador no soporta la geolocalización');
  throw new Error('El navegador no soporta la geolocalización');
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
