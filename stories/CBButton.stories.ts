import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/pattern-lib/src/lib/button/button.component';
const ImageFile = require('../projects/pattern-lib/static/assets/icons/search-white.svg');


export default {
  title: 'Connectbase/Button',
  component: ButtonComponent
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  className: 'primary-btn',
  size: 'large',
  label: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  className: 'secondary-btn',
  size: 'large',
  label: 'Secondary'
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  className: 'primary-btn',
  size: 'large',
  label: 'Disabled Button'
};

export const Medium = Template.bind({});
Medium.args = {
  disabled: false,
  className: 'primary-btn',
  size: 'medium',
  label: 'Medium'
};

export const Small = Template.bind({});
Small.args = {
  disabled: false,
  className: 'primary-btn',
  size: 'small',
  label: 'Small'
};

export const Icon = Template.bind({});
Icon.args = {
  disabled: false,
  className: 'icon primary-btn',
  size: 'medium',
  label: '',
  icon: true,
  img: ImageFile
};