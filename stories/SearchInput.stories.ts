import { Story, Meta } from '@storybook/angular/types-6-0';
import { SearchInputComponent } from '../projects/pattern-lib/src/lib/search-input/search-input.component';


export default {
  title: 'Connectbase/Search Input',
  component: SearchInputComponent
} as Meta;

const Template: Story<SearchInputComponent> = (args: SearchInputComponent) => ({
  props: args,
});

export const Normal = Template.bind({});
Normal.args = {
  size: 'large',
  shape: 'normal',
  placeholder: 'Search Here...'
};

export const Rounded = Template.bind({});
Rounded.args = {
  size: 'large',
  shape: 'rounded',
  placeholder: 'Search Here...'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  shape: 'rounded',
  placeholder: 'Custom...'
};