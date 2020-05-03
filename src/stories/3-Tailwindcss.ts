import {moduleMetadata, storiesOf} from '@storybook/angular';
import { TitleComponent } from '../app/components/title/title.component';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import { TailwindbuttonpillComponent} from '../app/components/tailwindbuttonpill/tailwindbuttonpill.component';

export default {
  title: 'TailWind Css'
};

export const Default = () => ({
  component: TailwindbuttonpillComponent
});
