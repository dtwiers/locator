import { For } from 'solid-js';
import { MapStyle, setStyle, style } from '../../state/map-style.state';

const styles: MapStyle[] = ['normal', 'dark', 'terrain', 'satellite'];

const ExteriorControls = () => {
  return (
    <form>
      <article>
        <For each={styles}>
          {styleEntry => (
            <>
              <input
                type='radio'
                id={styleEntry}
                name='map-style'
                value={styleEntry}
                onchange={() => {
                  setStyle(styleEntry);
                }}
                checked={style() === styleEntry}
              />
              <label for={styleEntry}>{styleEntry}</label>
            </>
          )}
        </For>
      </article>
    </form>
  );
};

export default ExteriorControls;
