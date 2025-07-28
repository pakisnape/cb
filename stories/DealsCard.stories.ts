import { Story, Meta } from '@storybook/angular/types-6-0';
import { DealsCardComponent } from '../projects/pattern-lib/src/lib/deals-card/deals-card.component';


export default {
  title: 'Connectbase/DealsCard',
  component: DealsCardComponent,
  argTypes: {
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<DealsCardComponent> = (args: DealsCardComponent) => ({
  props: args,
});

export const SingleLocation = Template.bind({});
SingleLocation.args = {
  card: {
    title: 'Starbucks, NY',
    status: 'pending',
    address: '123 Frames St. SF, CA, USA',
    category: 'Broadband, Fiber',
    speed: '1 G',
    amount: '$54000',
    mrc: '$27000',
    nrc: '$26000',
    providers_count: 5,
    nearby_companies: 12,
    customer: 'Starbucks',
    multi_location: false
  }
};

export const MultiLocation = Template.bind({});
MultiLocation.args = {
  card: {
    title: 'Starbucks, NY',
    status: 'sent',
    address: '123 Frames St. SF, CA, USA',
    amount: '$54000',
    providers_count: 5,
    customer: 'Starbucks',
    multi_location: true,
    locations: 34
  }
};