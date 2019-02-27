import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';

import Project from './Project';
import { projects } from '../__test__/projects'

setAddon(JSXAddon);

storiesOf('Project', module)
  .addWithJSX('example', () => <Project project={projects[0]} />);
