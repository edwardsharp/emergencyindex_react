import React from 'react';

import { setAddon, storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import JSXAddon from 'storybook-addon-jsx';

import { Welcome } from '@storybook/react/demo';

setAddon(JSXAddon);

storiesOf('Welcome', module)
.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
