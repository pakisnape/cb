import { Story, Meta } from '@storybook/angular/types-6-0';
import { AvatarComponent } from '../projects/pattern-lib/src/lib/avatar/avatar.component';


export default {
  title: 'Connectbase/Avatar',
  component: AvatarComponent,
  argTypes: {
    
  }
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const Gold = Template.bind({});
Gold.args = {
  type: 'gold',
  label: 'JP'
};

export const Purple = Template.bind({});
Purple.args = {
  type: 'purple',
  label: 'JP'
};

export const Orange = Template.bind({});
Orange.args = {
  type: 'orange',
  label: 'JP'
};

export const Blue = Template.bind({});
Blue.args = {
  type: 'blue',
  label: 'JP'
};