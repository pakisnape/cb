import { Story, Meta } from '@storybook/angular/types-6-0';
import { BadgeComponent } from '../projects/pattern-lib/src/lib/badge/badge.component';

export default {
  title: 'Connectbase/Badge',
  component: BadgeComponent,
  argTypes: {},
} as Meta;

const Template: Story<BadgeComponent> = (args: BadgeComponent) => ({
  props: args,
});

export const Pending = Template.bind({});
Pending.args = {
  type: 'pending',
  label: 'Pending',
};

export const Sent = Template.bind({});
Sent.args = {
  type: 'sent',
  label: 'Sent',
};

export const Rejected = Template.bind({});
Rejected.args = {
  type: 'rejected',
  label: 'Rejected',
};

export const Order = Template.bind({});
Order.args = {
  type: 'ordered',
  label: 'Order',
};

export const Closed = Template.bind({});
Closed.args = {
  type: 'closed',
  label: 'Closed',
};
