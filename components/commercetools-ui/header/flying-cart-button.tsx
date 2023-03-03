import React from 'react';
import { useCart, useUIStateContext } from 'frontastic';

export const FlyingCartButton: React.FC = () => {
  const { toggleFlyingCart } = useUIStateContext();
  const { data } = useCart();
  return (
    <button className="disabled:text-gray-400" onClick={() => toggleFlyingCart()} disabled={!data?.cartId}>
      <span>Quick Order</span>
      {/* <LightningBoltIcon className="h-6 w-6 shrink-0 text-white group-hover:text-white"></LightningBoltIcon> */}
    </button>
  );
};
