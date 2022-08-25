import { createSignal } from 'solid-js';

export type MapStyle = 'normal' | 'dark' | 'terrain' | 'satellite';

export const [style, setStyle] = createSignal<MapStyle>('normal');
