import { boolean, number, text } from '@storybook/addon-knobs';
import { withKnobs, object } from '@storybook/addon-knobs';
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
