import { storiesOf, moduleMetadata} from '@storybook/angular';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ButtonComponent} from '../app/components/button/button.component';
import { PrimarybuttonComponent} from '../app/components/primarybutton/primarybutton.component';
import { IconbuttonComponent } from '../app/components/iconbutton/iconbutton.component';
import { ToggleablebuttonComponent } from '../app/components/toggleablebutton/toggleablebutton.component';

storiesOf('Button', module).addDecorator(moduleMetadata({
  declarations: [ButtonComponent, PrimarybuttonComponent, IconbuttonComponent, ToggleablebuttonComponent],
  imports: [
    ButtonsModule
  ]
})).add('button test', () => {
  return {
    template: '<app-button></app-button>'
  };
}).add('primary button', () => {
  return {
    template: '<app-primarybutton></app-primarybutton>'
  };
}).add('icon button', () => {
  return {
    template: '<app-iconbutton></app-iconbutton>'
  };
}).add('toggleable button', () => {
  return {
    template: '<app-toggleablebutton></app-toggleablebutton>'
  };
})

