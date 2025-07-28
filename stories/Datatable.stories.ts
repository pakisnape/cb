import { Story, Meta } from '@storybook/angular/types-6-0';
import { DatatableComponent } from '../projects/pattern-lib/src/lib/datatable/datatable.component';


export default {
  title: 'Example/Datatable',
  component: DatatableComponent,
  argTypes: {
    headerBgColor: { control: 'color' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<DatatableComponent> = (args: DatatableComponent) => ({
  props: args,
});

export const WithData = Template.bind({});
WithData.args = {
  searchable: false,
  headerBgColor: '#F5F5F5',
  columns: ['Name', 'Position', 'Office', 'Age', 'Salary'],
  rows: [
    {
      'Name': 'Tiger Nixon',
      'Position': 'System Architect',
      'Office': 'Edinburgh',
      'Age': 61,
      'Salary': '$320,800',
    },
    {
      'Name': 'Sonya Frost',
      'Position': 'Software Engineer',
      'Office': 'Edinburgh',
      'Age': 23,
      'Salary': '$103,600',
    },
    {
      'Name': 'Jena Gaines',
      'Position': 'Office Manager',
      'Office': 'London',
      'Age': 30,
      'Salary': '$90,560',
    },
    {
      'Name': 'Quinn Flynn',
      'Position': 'Support Lead',
      'Office': 'Edinburgh',
      'Age': 22,
      'Salary': '$342,000',
    },
    {
      'Name': 'Charde Marshall',
      'Position': 'Regional Director',
      'Office': 'San Francisco',
      'Age': 36,
      'Salary': '$470,600',
    },
    {
      'Name': 'Haley Kennedy',
      'Position': 'Senior Marketing Designer',
      'Office': 'London',
      'Age': 43,
      'Salary': '$313,500',
    },
    {
      'Name': 'Tatyana Fitzpatrick',
      'Position': 'Regional Director',
      'Office': 'London',
      'Age': 19,
      'Salary': '$385,750',
    },
    {
      'Name': 'Michael Silva',
      'Position': 'Marketing Designer',
      'Office': 'London',
      'Age': 66,
      'Salary': '$198,500',
    },
    {
      'Name': 'Paul Byrd',
      'Position': "Chief Financial 'Office'r (CFO)",
      'Office': 'New York',
      'Age': 64,
      'Salary': '$725,000',
    },
    {
      'Name': 'Gloria Little',
      'Position': 'Systems Administrator',
      'Office': 'New York',
      'Age': 59,
      'Salary': '$237,500',
    },
    {
      'Name': 'Garrett Winters',
      'Position': 'Accountant',
      'Office': 'Tokyo',
      'Age': 63,
      'Salary': '$170,750',
    },
    {
      'Name': 'Ashton Cox',
      'Position': 'Junior Technical Author',
      'Office': 'San Francisco',
      'Age': 66,
      'Salary': '$86,000',
    },
    {
      'Name': 'Cedric Kelly',
      'Position': 'Senior Javascript Developer',
      'Office': 'Edinburgh',
      'Age': 22,
      'Salary': '$433,060',
    },
    {
      'Name': 'Airi Satou',
      'Position': 'Accountant',
      'Office': 'Tokyo',
      'Age': 33,
      'Salary': '$162,700',
    },
    {
      'Name': 'Brielle Williamson',
      'Position': 'Integration Specialist',
      'Office': 'New York',
      'Age': 61,
      'Salary': '$372,000',
    },
  ],
};

export const WithoutData = Template.bind({});
WithoutData.args = {
  headerBgColor: '#F5F5F5',
  searchable: false,
  columns: ['Name', 'Position', 'Office', 'Age', 'Salary'],
  rows: [],
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  headerBgColor: '#F5F5F5',
  searchable: true,
  columns: ['Name', 'Position', 'Office', 'Age', 'Salary'],
  rows: [
    {
      'Name': 'Tiger Nixon',
      'Position': 'System Architect',
      'Office': 'Edinburgh',
      'Age': 61,
      'Salary': '$320,800',
    },
    {
      'Name': 'Sonya Frost',
      'Position': 'Software Engineer',
      'Office': 'Edinburgh',
      'Age': 23,
      'Salary': '$103,600',
    },
    {
      'Name': 'Jena Gaines',
      'Position': 'Office Manager',
      'Office': 'London',
      'Age': 30,
      'Salary': '$90,560',
    },
    {
      'Name': 'Quinn Flynn',
      'Position': 'Support Lead',
      'Office': 'Edinburgh',
      'Age': 22,
      'Salary': '$342,000',
    },
    {
      'Name': 'Charde Marshall',
      'Position': 'Regional Director',
      'Office': 'San Francisco',
      'Age': 36,
      'Salary': '$470,600',
    },
    {
      'Name': 'Haley Kennedy',
      'Position': 'Senior Marketing Designer',
      'Office': 'London',
      'Age': 43,
      'Salary': '$313,500',
    },
    {
      'Name': 'Tatyana Fitzpatrick',
      'Position': 'Regional Director',
      'Office': 'London',
      'Age': 19,
      'Salary': '$385,750',
    },
    {
      'Name': 'Michael Silva',
      'Position': 'Marketing Designer',
      'Office': 'London',
      'Age': 66,
      'Salary': '$198,500',
    },
    {
      'Name': 'Paul Byrd',
      'Position': "Chief Financial 'Office'r (CFO)",
      'Office': 'New York',
      'Age': 64,
      'Salary': '$725,000',
    },
    {
      'Name': 'Gloria Little',
      'Position': 'Systems Administrator',
      'Office': 'New York',
      'Age': 59,
      'Salary': '$237,500',
    },
    {
      'Name': 'Garrett Winters',
      'Position': 'Accountant',
      'Office': 'Tokyo',
      'Age': 63,
      'Salary': '$170,750',
    },
    {
      'Name': 'Ashton Cox',
      'Position': 'Junior Technical Author',
      'Office': 'San Francisco',
      'Age': 66,
      'Salary': '$86,000',
    },
    {
      'Name': 'Cedric Kelly',
      'Position': 'Senior Javascript Developer',
      'Office': 'Edinburgh',
      'Age': 22,
      'Salary': '$433,060',
    },
    {
      'Name': 'Airi Satou',
      'Position': 'Accountant',
      'Office': 'Tokyo',
      'Age': 33,
      'Salary': '$162,700',
    },
    {
      'Name': 'Brielle Williamson',
      'Position': 'Integration Specialist',
      'Office': 'New York',
      'Age': 61,
      'Salary': '$372,000',
    },
  ],
};
