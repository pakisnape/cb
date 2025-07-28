import { Story, Meta } from '@storybook/angular/types-6-0';
import { StripComponent } from '../projects/pattern-lib/src/lib/strip/strip.component';


export default {
  title: 'Connectbase/Strip',
  component: StripComponent
} as Meta;

const Template: Story<StripComponent> = (args: StripComponent) => ({
  props: args,
});

export const Strip = Template.bind({});
Strip.args = { };