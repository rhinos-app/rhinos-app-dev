import { configure } from '@kadira/storybook';

function loadStories() {
  require('../web/stories');
}

configure(loadStories, module);
