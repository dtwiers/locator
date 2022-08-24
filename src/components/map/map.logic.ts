import { Map } from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../../config/env';
import 'mapbox-gl/dist/mapbox-gl.css'

export const mountMap2 = (element: HTMLElement) => {
  const myMap = new Map({
    container: element,
    center: [-74.5, 40],
    // projection: { name: 'albers' },
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: MAPBOX_TOKEN
  });
};
