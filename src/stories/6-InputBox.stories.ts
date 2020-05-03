import { InputboxComponent } from '../app/components/inputbox/inputbox.component';
import {withKnobs, object, text, boolean} from '@storybook/addon-knobs';

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

