import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

storiesOf('Introduction', module)
.add('to Storybook', () => <>
  <h1>Emergency INDEX</h1>
  <h3>storybook</h3>

  <p>This is a UI component dev environment for the emergencyindex react app.</p>
  <p>A story is a single state of one or more UI components. Basically a story is like a visual test case.</p>
  
</>);
