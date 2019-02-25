import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';

import Button from './Button';

setAddon(JSXAddon);

storiesOf('Button', module)
  .addWithJSX('with text', () => <Button variant="contained" color="primary" onClick={action('clicked')}>Emergency INDEX</Button>)
  .addWithJSX('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="zzzzzoooommmbie zzzooooommmmmbbbbie">
        🧟‍♀️
      </span>
    </Button>
  ));
