import { Story, Meta } from '@storybook/angular/types-6-0';
import { DropdownStatusComponent } from '../projects/pattern-lib/src/lib/dropdown-status/dropdown-status.component';

export default {
  title: 'Connectbase/Status Dropdown',
  component: DropdownStatusComponent,
} as Meta;

const Template: Story<DropdownStatusComponent> = (
  args: DropdownStatusComponent
) => ({
  props: args,
});

export const Received = Template.bind({});
Received.args = {
  status: 'Received',
  statusClass: 'received',
  items: ['Acknowledge', 'Reject', 'Held'],
};

export const Acknowledged = Template.bind({});
Acknowledged.args = {
  status: 'Acknowledged',
  statusClass: 'acknowledged',
  items: ['Advance to Progress', 'Held'],
};

export const Rejected = Template.bind({});
Rejected.args = {
  status: 'Rejected',
  statusClass: 'rejected',
  items: ['Advance to Progress', 'Held'],
};

export const InProgress = Template.bind({});
InProgress.args = {
  status: 'In Progress',
  statusClass: 'in-progress',
  items: ['Advance to Confirmed', 'Held'],
};
