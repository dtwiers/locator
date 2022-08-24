import { Map } from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../../config/env';
import 'mapbox-gl/dist/mapbox-gl.css';

export const mountMap2 = (element: HTMLElement) => {
  const myMap = new Map({
    container: element,
    center: [-93.663101196, 41.534000],
    zoom: 13,
    // projection: { name: 'albers' },
    style: 'mapbox://styles/mapbox/dark-v10',
    // style: 'mapbox://styles/mapbox/outdoors-v11',
    // style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: MAPBOX_TOKEN
  });
};
