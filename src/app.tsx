import MyMap from './components/map';
import styles from './app.module.css';
import ExteriorControls from './components/exterior-controls/exterior-controls';

const App = () => (
  <main class={styles.main}>
    <ExteriorControls />
    <MyMap />
  </main>
);

export default App;
