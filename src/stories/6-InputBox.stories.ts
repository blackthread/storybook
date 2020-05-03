import { storiesOf } from '@storybook/angular';
import { InputboxComponent } from '../app/components/inputbox/inputbox.component';
import {withKnobs, object, text, boolean} from '@storybook/addon-knobs';
import StorybookbuttonComponent from '../app/components/storybookbutton/storybookbutton.component';


export default {
  title: "input Knobs",
  decorators: [withKnobs]
};

export const Default = () => ({
  component: InputboxComponent,
  props: {
    label: text('Label', 'The label', 'General'),
    placeholder: text('Placeholder', 'The placeholder', 'General'),
    disabled: boolean('Disabled', true, 'General')
},
});




/*
storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
  component: InputboxComponent,
}))
  .add('Disabled', () => ({
  component: InputboxComponent,
    decorators: [withKnobs],
    props: {
      label: 'The disabled label',
      placeholder: 'The disabled placeholder',
      disabled: true,
    }
}))
*/
