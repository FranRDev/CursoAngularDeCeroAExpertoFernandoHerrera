import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = '';

if (!navigator.geolocation) {
  alert('El navegador no soporta la geolocalización');
  throw new Error('El navegador no soporta la geolocalización');
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
