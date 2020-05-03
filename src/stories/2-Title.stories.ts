import {moduleMetadata, storiesOf} from '@storybook/angular';
import { TitleComponent } from '../app/components/title/title.component';
import {ButtonsModule} from '@progress/kendo-angular-buttons';

export default {
  title: 'sg-adminconfig-title1'
};

const selligentData = {
  id: '1',
  title: 'Admin Config Title'
};

const selligentData1 = {
  id: '1',
  title: 'Other Title'
};

export const Default = () => ({
  component: TitleComponent,
  props: {
    selligent: selligentData
  },
});

/*
.add('toggleable button', () => {
  return {
    template: '<app-toggleablebutton></app-toggleablebutton>'
  };*/

export const OtherTitle = () => ({
  component: TitleComponent,
  props: {
    selligent: selligentData1
  },
});
