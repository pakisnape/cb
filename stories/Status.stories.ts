import { Story, Meta } from '@storybook/angular/types-6-0';
import { StatusIndicatorComponent } from '../projects/pattern-lib/src/lib/status-indicator/status-indicator.component';

export default {
  title: 'Connectbase/Status Indicator',
  component: StatusIndicatorComponent,
} as Meta;

const Template: Story<StatusIndicatorComponent> = (
  args: StatusIndicatorComponent
) => ({
  props: args,
});

export const Pending = Template.bind({});
Pending.args = {
  type: 'pending',
};

export const Order = Template.bind({});
Order.args = {
  type: 'order',
};

export const Sent = Template.bind({});
Sent.args = {
  type: 'sent',
};

export const Rejected = Template.bind({});
Rejected.args = {
  type: 'rejected',
};

export const Closed = Template.bind({});
Closed.args = {
  type: 'closed',
};
