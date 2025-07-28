import { Story, Meta } from '@storybook/angular/types-6-0';
import { DropdownComponent } from '../projects/pattern-lib/src/lib/dropdown/dropdown.component';


export default {
  title: 'Connectbase/Dropdown',
  component: DropdownComponent
} as Meta;

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
});

export const Normal = Template.bind({});
Normal.args = {
  disabled: false,
  type: 'normal',
  placeholder: 'Categories',
  items: [
    {'key': 'All', 'value': 'all'},
    {'key': 'SONET/TDM', 'value': '1'},
    {'key': 'Wavelengths', 'value': '2'},
    {'key': 'Dark Fiber', 'value': '3'},
    {'key': 'MPLS', 'value': '4'},
    {'key': 'Dedicated Internet', 'value': '5'},
    {'key': 'Broadband', 'value': '6'}
  ]
};

export const Rounded = Template.bind({});
Rounded.args = {
  disabled: false,
  type: 'rounded',
  placeholder: 'Categories',
  items: [
    {'key': 'All', 'value': 'all'},
    {'key': 'SONET/TDM', 'value': '1'},
    {'key': 'Wavelengths', 'value': '2'},
    {'key': 'Dark Fiber', 'value': '3'},
    {'key': 'MPLS', 'value': '4'},
    {'key': 'Dedicated Internet', 'value': '5'},
    {'key': 'Broadband', 'value': '6'}
  ]
};

export const CustomNormal = Template.bind({});
CustomNormal.args = {
  disabled: false,
  type: 'normal',
  placeholder: 'Categories',
  custom: true,
  items: [
    {'key': 'All', 'value': 'all'},
    {'key': 'SONET/TDM', 'value': '1'},
    {'key': 'Wavelengths', 'value': '2'},
    {'key': 'Dark Fiber', 'value': '3'},
    {'key': 'MPLS', 'value': '4'},
    {'key': 'Dedicated Internet', 'value': '5'},
    {'key': 'Broadband', 'value': '6'}
  ]
};

export const CustomRounded = Template.bind({});
CustomRounded.args = {
  disabled: false,
  type: 'rounded',
  placeholder: 'Categories',
  custom: true,
  items: [
    {'key': 'All', 'value': 'all'},
    {'key': 'SONET/TDM', 'value': '1'},
    {'key': 'Wavelengths', 'value': '2'},
    {'key': 'Dark Fiber', 'value': '3'},
    {'key': 'MPLS', 'value': '4'},
    {'key': 'Dedicated Internet', 'value': '5'},
    {'key': 'Broadband', 'value': '6'}
  ]
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  disabled: true,
  type: 'normal',
  placeholder: 'Categories',
  items: [
    {'key': 'All', 'value': 'all'},
    {'key': 'SONET/TDM', 'value': '1'},
    {'key': 'Wavelengths', 'value': '2'},
    {'key': 'Dark Fiber', 'value': '3'},
    {'key': 'MPLS', 'value': '4'},
    {'key': 'Dedicated Internet', 'value': '5'},
    {'key': 'Broadband', 'value': '6'}
  ]
};