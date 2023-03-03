import React from 'react';
import { Story, Meta } from '@storybook/react';
import { addresses } from 'helpers/mocks/mockData';
import UpdateAddress, { UpdateAddressProps } from './index';

export default {
  title: 'Frontastic/UpdateAddress',
  component: UpdateAddress,
  argTypes: {},
} as Meta;

const Template: Story<UpdateAddressProps> = (args) => (
  <UpdateAddress
    addressId="adrs-1"
    defaultValues={addresses[0]}
    onClose={() => console.log('Closed')}
    updateAddress={() => true}
    open={true}
    {...args}
  />
);

export const Primary = Template.bind({});

Primary.args = {};
