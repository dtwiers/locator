import { Map as Mapbox } from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../../config/env';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapStyle, style } from '../../state/map-style.state';
import { createEffect } from 'solid-js';

const styleToUrlMap = new Map<MapStyle, string>([
  ['normal', 'mapbox://styles/mapbox/streets-v11'],
  ['dark', 'mapbox://styles/mapbox/dark-v10'],
  ['terrain', 'mapbox://styles/mapbox/outdoors-v11'],
  ['satellite', 'mapbox://styles/mapbox/satellite-streets-v11']
]);

export const mountMap2 = (element: HTMLElement) => {
  const myMap = new Mapbox({
    container: element,
    center: [-93.663101196, 41.534],
    zoom: 13,
    accessToken: MAPBOX_TOKEN
  });
  createEffect(() => {
    myMap.setStyle(styleToUrlMap.get(style())!);
  });
};
