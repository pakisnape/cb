import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormComponent } from '../projects/pattern-lib/src/lib/form/form.component';


export default {
  title: 'Connectbase/Form',
  component: FormComponent
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: 'checkbox',
  items: [
    { label: 'Apple' }, 
    { label: 'Orange' },
    { label: 'Mango' }
  ]
};

export const Radio = Template.bind({});
Radio.args = {
  type: 'radio',
  items: [
    { label: 'Male' }, 
    { label: 'Female'}
  ]
};