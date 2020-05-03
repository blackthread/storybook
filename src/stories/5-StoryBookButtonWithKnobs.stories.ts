import { storiesOf } from '@storybook/angular';
import { boolean, number, text } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import { Button } from '@storybook/angular/demo';
import StorybookbuttonComponent from '../app/components/storybookbutton/storybookbutton.component';

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs]
};

export const Default = () => ({
  component: StorybookbuttonComponent,
  props: {
    text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
  },
});
