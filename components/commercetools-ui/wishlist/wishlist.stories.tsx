import React from 'react';
import { Story, Meta } from '@storybook/react';
import { wishlist } from 'helpers/mocks/mockData';
import WishList, { Props } from './index';

export default {
  title: 'Frontastic/Wishlist',
  component: WishList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <WishList wishlistId="123" {...args} />;

export const Primary = Template.bind({});
