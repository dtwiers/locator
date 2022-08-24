import { render } from 'solid-js/web';
import App from './app';

const root = document.getElementById('solid-root');
if (root) {
  render(App, root);
}
