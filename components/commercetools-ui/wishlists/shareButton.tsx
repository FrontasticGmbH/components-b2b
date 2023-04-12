import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/outline';
import { BusinessUnit } from 'cofe-ct-b2b-ecommerce/types/business-unit/BusinessUnit';
import { Wishlist } from 'cofe-ct-b2b-ecommerce/types/wishlist/Wishlist';
import { useWishlist } from 'frontastic';
import { LoadingIcon } from '../icons/loading';

interface Props {
  associations: BusinessUnit[];
  wishlist: Wishlist;
  reload: () => Promise<void>;
}
const ShareButton: React.FC<Props> = ({ associations, reload, wishlist }) => {
  const { share } = useWishlist();

  const [isSharing, setIsSharing] = useState<boolean[]>([]);

  const handleShare = async (wishlist: Wishlist, businessUnitKey: string, i: number) => {
    setIsSharing(isSharing.map((_, idx) => idx === i));
    await share(wishlist.wishlistId, businessUnitKey);
    await reload();
    setIsSharing(isSharing.map(() => false));
  };

  useEffect(() => {
    setIsSharing(Array.from(associations, () => false));
  }, []);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? '' : 'text-opacity-90'}
                  group inline-flex items-center rounded-md bg-accent-400 px-7 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>Share</span>
            <ChevronDownIcon
              className={`${open ? '' : 'transform text-opacity-70'}
                    ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm -translate-x-1/2 px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white">
                  {associations.map((bu, index) => (
                    <button
                      key={bu.key}
                      className="flex w-full flex-row items-center p-2 hover:bg-gray-100"
                      onClick={() => handleShare(wishlist, bu.key, index)}
                    >
                      {wishlist.shared?.includes(bu.key) && <CheckIcon className="mr-2 h-4 w-4" />}
                      <span className="">{bu.name}</span>
                      {isSharing[index] && <LoadingIcon className="ml-2 h-4 w-4 animate-spin" />}
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ShareButton;
