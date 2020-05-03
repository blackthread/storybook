import { storiesOf, moduleMetadata } from '@storybook/angular';

import { linkTo } from '@storybook/addon-links';
import { environment } from '../environments/environment';
import StorybookbuttonComponent from '../app/components/storybookbutton/storybookbutton.component';

if (environment) {
  // This ensures that the basePath typeScript feature works with storybook
}

storiesOf('ConfigurableButton', module)
  .addDecorator(
    moduleMetadata({
      declarations: [StorybookbuttonComponent],
    })
  )
  .add('with text', () => ({
    template: `<app-storybookbutton [text]="text" (onClick)="onClick($event)"></app-storybookbutton>`,
    props: {
      text: 'Hello Button1',
      onClick: (event: any) => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  }))
  .add('with some emoji', () => ({
    template: `<app-storybookbutton [text]="text" (onClick)="onClick($event)"></app-storybookbutton>`,
    props: {
      text: '😀 😎 👍 💯',
      onClick: () => {},
    },
  }));
