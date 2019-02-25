import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import JSXAddon from 'storybook-addon-jsx';
import { Welcome } from '@storybook/react/demo';
import Button from './Button'

setAddon(JSXAddon);

storiesOf('Welcome', module)
.add('to Storybook', () => <>
  <h1>Emergency INDEX</h1>
  <h3>storybook</h3>

  <p>This is a UI component dev environment for the emergencyindex react app.</p>
  <p>A story is a single state of one or more UI components. Basically a story is like a visual test case.</p>
  
</>);
