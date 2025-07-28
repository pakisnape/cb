import { Story, Meta } from '@storybook/angular/types-6-0';
import { SidebarComponent } from '../projects/pattern-lib/src/lib/sidebar/sidebar.component';
const HomeImageFile = require('../projects/pattern-lib/static/assets/icons/nav-bar/home.svg');
const DealsImageFile = require('../projects/pattern-lib/static/assets/icons/nav-bar/deals.svg');
const LocationsImageFile = require('../projects/pattern-lib/static/assets/icons/nav-bar/locations.svg');
const InsightsImageFile = require('../projects/pattern-lib/static/assets/icons/nav-bar/insights.svg');


export default {
  title: 'Connectbase/Sidebar',
  component: SidebarComponent
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
  props: args,
});

export const Sidebar = Template.bind({});
Sidebar.args = {
  items: [
    { label: 'Home', img: HomeImageFile, active: true },
    { label: 'Deals', img: DealsImageFile, active: false },
    { label: 'Locations', img: LocationsImageFile, active: false },
    { label: 'Insights', img: InsightsImageFile, active: false }
  ]
};