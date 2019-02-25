import React from 'react';

import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import JSXAddon from 'storybook-addon-jsx';

import { Button, Welcome } from '@storybook/react/demo';

setAddon(JSXAddon);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addWithJSX('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .addWithJSX('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
