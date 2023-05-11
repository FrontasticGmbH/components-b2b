import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LineItem } from '@commercetools/frontend-domain-types/wishlist/LineItem';
import { Variant } from '@Types/product/Variant';
import { Wishlist } from '@Types/wishlist/Wishlist';
import { useCart } from 'frontastic';
const useLists = (getWishlists: () => Promise<Wishlist[]>) => {
  const { addItems } = useCart();
  const router = useRouter();

  const [wishlists, setWishlists] = useState<Wishlist[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState<boolean[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const addItemsToCart = async (lineitems: LineItem[], i: number) => {
    setIsAdding(isAdding.map((_, index) => index === i));
    await addItems(lineitems.map((item) => ({ variant: item.variant as Variant, quantity: item.count })));
    setIsAdding(isAdding.map(() => false));
    router.push('/checkout');
  };

  const reload = async () => {
    const lists = await getWishlists();
    setWishlists(lists);
  };

  useEffect(() => {
    setIsDisabled(isAdding.some((item) => item));
  }, [isAdding]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const lists = await getWishlists();
      setWishlists(lists);
      setIsLoading(false);
      setIsAdding(Array.from(lists, () => false));
    })();
  }, []);

  return {
    addItemsToCart,
    reload,
    wishlists,
    isLoading,
    isAdding,
    isDisabled,
  };
};

export { useLists };
