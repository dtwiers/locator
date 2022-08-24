import { onMount } from 'solid-js';
import { mountMap2 } from './map.logic';
import styles from './map.module.css';

const MyMap = () => {
  let mapRootRef: HTMLDivElement = null as any;
  onMount(() => {
    mountMap2(mapRootRef);
  });

  return <div ref={mapRootRef} class={styles.map} />;
};

export default MyMap;
