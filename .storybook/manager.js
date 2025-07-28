import { addons } from '@storybook/addons';
import connectbaseTheme from './connectbase-theme';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', 'https://www.connectbase.com/wp-content/uploads/2022/02/favicon.png');
document.head.appendChild(link);

addons.setConfig({
  theme: connectbaseTheme,
});