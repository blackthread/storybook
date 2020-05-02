import {moduleMetadata, storiesOf} from '@storybook/angular';
import { TitleComponent } from '../app/components/title/title.component';
import {ButtonsModule} from '@progress/kendo-angular-buttons';

export default {
  title: 'sg-adminconfig-title'
};

const selligentData = {
  id: '1',
  title: 'Admin Config Title'
};

export const Default = () => ({
  component: TitleComponent,
  props: {
    selligent: selligentData
  },
});
