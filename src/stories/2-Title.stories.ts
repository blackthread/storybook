import { TitleComponent } from '../app/components/title/title.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'sg-adminconfig-title',
  decorators: [withKnobs]
};


export const Default = () => ({
  component: TitleComponent,
  props: {
    title: text('text', 'Hello AdminConfig Title')
  },
});

export const OtherTitle = () => ({
  component: TitleComponent,
  props: {
    title: text('text', 'other title')
  },
});
