import { ListComponent} from '../app/components/list/list.component';
import {storiesOf} from '@storybook/angular';
import {withKnobs, object} from '@storybook/addon-knobs';
import { listItems} from '../app/components/list/list.component.mocks';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: ListComponent,
    props: {
      items: object('Items', listItems, 'General')
    }
  }));
