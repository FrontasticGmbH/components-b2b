import { Meta, StoryFn } from '@storybook/react';
import { cart } from '@/mocks/cart';
import Cart from '.';

export default {
  title: 'Organisms/Cart',
  component: Cart,
} as Meta<typeof Cart>;

const Template: StoryFn<typeof Cart> = () => (
  <Cart
    {...cart}
    onRemove={async () => {}}
    onUpdateQuantity={async () => {}}
    onRequestQuote={async () => {}}
    paymentMethods={[]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
