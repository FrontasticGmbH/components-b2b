/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {Fragment, useEffect, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {LineItem, ReturnItem} from '@Types/cart/LineItem';
import {Order} from '@Types/cart/Order';
import {LoadingIcon} from 'components/commercetools-ui/icons/loading';
import {useCart, useDarkMode} from 'frontastic';
import Image from 'frontastic/lib/image';

interface Props {
  open: boolean;
  onClose: () => void;
  order: Order;
}

interface LineItemReturn extends ReturnItem {
  selected?: boolean;
}

const REASONS = [
  'Unwanted item',
  'Item is defective',
  'Unauthorized purchase',
  'The item was not recieved by the estimated delivery date',
  'Accidentally ordered the wrong item',
  'Product is not as described on the website',
  'None of the above',
];

const OrderReturnModal: React.FC<Props> = ({ open, onClose, order }) => {
  const { mode } = useDarkMode();

  const { returnItems } = useCart();

  const orderWithAvailableQuantities: Order = !order.returnInfo?.some((returnItem) => returnItem?.items?.[0])
    ? order
    : {
        ...order,
        lineItems: order.lineItems.map((lineitem) => ({
          ...lineitem,
          count:
            lineitem.count -
            order.returnInfo.reduce(
              (prev, curr) =>
                prev + curr.items.reduce((p, c) => p + (c.lineItemId === lineitem.lineItemId ? c.count : 0), 0),
              0,
            ),
        })),
      };

  const getInitalReturnLineItems = (): LineItemReturn[] => {
    return orderWithAvailableQuantities.lineItems.map((lineitem) => ({
      lineItemId: lineitem.lineItemId,
      count: 0,
      shipmentState: 'Returned',
      selected: false,
    }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [returnLineItems, setReturnLineItems] = useState<LineItemReturn[]>(getInitalReturnLineItems());

  const updateComment = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const lineItems = [...returnLineItems];
    if (e.target.selectedIndex !== 0) {
      lineItems[index] = {
        ...lineItems[index],
        comment: e.target.value,
      };
    } else {
      delete lineItems[index].comment;
    }

    setReturnLineItems(lineItems);
  };

  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const lineItems = [...returnLineItems];
    lineItems[index] = {
      ...lineItems[index],
      count: +e.target.value,
    };
    setReturnLineItems(lineItems);
  };

  const updateCheckedItem = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const lineItems = [...returnLineItems];
    lineItems[index] = {
      ...lineItems[index],
      selected: e.target.checked,
    };
    setReturnLineItems(lineItems);
  };

  const isEligibleForReturn = (lineItem: LineItem): boolean => {
    return (
      typeof lineItem.variant?.attributes?.['return-eligible'] !== 'boolean' ||
      lineItem.variant?.attributes?.['return-eligible']
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isValid) {
      setIsLoading(true);
      try {
        await returnItems(
          order.orderId,
          returnLineItems.filter((item) => item.count > 0),
        );
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
      onClose();
    }
  };

  useEffect(() => {
    setIsValid(returnLineItems.some((item) => item.selected && item.count > 0));
  }, [returnLineItems]);

  if (!order) {
    return null;
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`${mode} default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
        <Transition.Root>
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-left sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="absolute inset-0" onClick={onClose}>
                {/* eslint-disable */}
                <div
                  className="absolute top-1/2 left-1/2 h-[90vh] w-[60%] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:py-24 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative mx-auto">
                    <div className="text-center">
                      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                        Return items
                      </h2>
                    </div>
                    <form className="" onSubmit={handleSubmit}>
                      {orderWithAvailableQuantities.lineItems?.map((lineItem, i) => (
                        <div
                          key={lineItem.lineItemId}
                          className={`border-1 rounded-sm border-t py-4 px-2 ${
                            !returnLineItems[i].selected ? 'bg-gray-100' : ''
                          }`}
                        >
                          <div className="flex flex-row">
                            <div className="pr-2">
                              <input
                                type="checkbox"
                                className="inout input-checkbox mt-8"
                                checked={returnLineItems[i].selected}
                                disabled={lineItem.count === 0 || !isEligibleForReturn(lineItem)}
                                onChange={(e) => updateCheckedItem(e, i)}
                              ></input>
                            </div>

                            <Image
                              src={lineItem.variant.images[0]}
                              alt={lineItem.name}
                              className="mr-6 mt-2 h-16 w-16 rounded object-contain object-center"
                            />
                            <div>
                              <label htmlFor="count">Available quantity</label>
                              <input
                                className="input input-primary h-10"
                                value={lineItem.count}
                                id="count"
                                name="count"
                                type="number"
                                readOnly
                              />
                            </div>
                            <div className="ml-4 w-80">
                              <label htmlFor="quantity">Quantity to return</label>
                              <input
                                className="input input-primary h-10"
                                value={returnLineItems[i].count}
                                id="quantity"
                                name="quantity"
                                type="number"
                                max={lineItem.count}
                                min={0}
                                required
                                disabled={!returnLineItems[i].selected}
                                onChange={(e) => updateQuantity(e, i)}
                              />
                            </div>
                            <div className="ml-4 w-80">
                              <label htmlFor="comment">Reason</label>
                              <select
                                className="input input-primary h-10"
                                value={returnLineItems[i].comment}
                                id="comment"
                                name="comment"
                                disabled={!returnLineItems[i].selected}
                                onChange={(e) => updateComment(e, i)}
                              >
                                <option value={null}>Please select a reason</option>
                                {REASONS.map((reason) => (
                                  <option value={reason} key={reason}>
                                    {reason}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          {!isEligibleForReturn(lineItem) && (
                            <span className="text-sm text-red-300">This item is not eligible for return</span>
                          )}
                        </div>
                      ))}
                      <div className="border-1 flex flex-row justify-between border-t px-20">
                        <button type="button" className="button button-secondary" onClick={onClose}>
                          Cancel
                        </button>
                        <button className="button button-primary flex flex-row" disabled={isLoading || !isValid}>
                          Return
                          {isLoading && <LoadingIcon className="ml-2 h-4 w-4 animate-spin" />}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition.Root>
      </Dialog>
    </Transition.Root>
  );
};

export default OrderReturnModal;
