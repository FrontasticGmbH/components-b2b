import React, { useEffect, useRef, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, TrashIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';
import Papa from 'papaparse';
import { useCart } from 'frontastic';
import Item from '../cart/item';
import { LoadingIcon } from '../icons/loading';
type Props = {
  addedTocart: () => void;
};

interface CSVLineItem {
  sku: string;
  quantity: number;
  isValid: boolean;
  isSelected: boolean;
}

const CSVUploader: React.FC<Props> = ({ addedTocart }) => {
  const { addItems } = useCart();
  const [selectedFile, setSelectedFile] = useState<File>(null);
  const [config, setConfig] = useState({
    header: true,
    skipEmptyLines: false,
    dynamicTyping: true,
  });
  const [lineItems, setLineItems] = useState<CSVLineItem[]>([]);
  const [isParsing, setIsParsing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>();

  const handleFileChange = () => {
    if (fileInputRef.current.files.length > 0) {
      setSelectedFile(fileInputRef.current.files[0]);
    }
  };
  const handleClearFile = () => {
    setSelectedFile(null);
    setLineItems([]);
    fileInputRef.current.value = null;
  };
  const handleUpload = () => {
    setIsParsing(true);
    Papa.parse(selectedFile, {
      ...config,
      complete: ({ data }) => setItems(data),
      error: (e) => setError(e),
    });
    setIsParsing(false);
  };
  const setItems = (data: CSVLineItem[]) => {
    setLineItems(
      data.map((item) => ({
        ...item,
        isValid: !!item.sku && typeof item.quantity !== 'undefined',
        isSelected: !!item.sku && typeof item.quantity !== 'undefined' ? true : false,
      })),
    );
  };
  const updateLineItem = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setLineItems(
      lineItems.map((item, idx) => {
        return idx !== i ? item : { ...item, isSelected: e.target.checked };
      }),
    );
  };
  const handleAddToCart = async () => {
    setIsLoading(true);
    await addItems(
      lineItems
        .filter((item) => item.isSelected)
        .map((item) => ({ variant: { sku: item.sku }, quantity: item.quantity })),
    );
    setIsLoading(false);
    setIsAdded(true);
  };
  useEffect(() => {
    if (isAdded) {
      setTimeout(() => {
        setIsAdded(false);
        addedTocart();
      }, 1000);
    }
  }, [isAdded]);

  return (
    <div className="px-2">
      {!lineItems.length && (
        <>
          <div className="flex w-full flex-row justify-between">
            <input type="file" ref={fileInputRef} accept=".csv" onChange={handleFileChange} />
            {!selectedFile && (
              <a href="/template.csv" className="text-xs underline">
                Template file
              </a>
            )}
            {!!selectedFile && (
              <button onClick={handleClearFile}>
                <TrashIcon className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="mt-1 w-full">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-gray-100 p-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>Settings</span>
                    <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="flex flex-row flex-wrap">
                      <div className="flex basis-1/2 flex-row items-center">
                        <input
                          id="skipEmptyLines"
                          name="skipEmptyLines"
                          type="checkbox"
                          className="input input-checkbox"
                          checked={config.skipEmptyLines}
                          onChange={(e) => setConfig({ ...config, skipEmptyLines: e.target.checked })}
                        />
                        <label htmlFor="skipEmptyLines" className="ml-2">
                          Skip empty lines
                        </label>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {!!selectedFile && (
            <button className="button button-primary flex items-center" onClick={handleUpload} disabled={isParsing}>
              Upload
              {isParsing && <LoadingIcon className="ml-2 h-4 w-4 animate-spin" />}
            </button>
          )}
        </>
      )}

      {!!error && <span className="text-sm text-red-300">{error}</span>}
      {!error && !!lineItems.length && (
        <div>
          <p className="mb-2 text-sm font-semibold">Select items to upload</p>
          <div className="flex max-h-60 flex-col overflow-y-scroll">
            {lineItems.map((lineitem, i) => (
              <div key={i} className={`mb-1 flex flex-row items-center text-sm ${!lineitem.isValid && 'bg-gray-100'}`}>
                <input
                  type="checkbox"
                  className="input input-checkbox mr-1"
                  disabled={!lineitem.isValid}
                  checked={lineitem.isSelected}
                  onChange={(e) => updateLineItem(e, i)}
                />
                <label className={`mr-1 font-semibold ${!lineitem.isValid && 'line-through'}`}>SKU:</label>
                <span>{lineitem.sku}</span>
                <label className={`mx-1 font-semibold ${!lineitem.isValid && 'line-through'}`}>Quantity:</label>
                <span>{lineitem.quantity}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-row justify-between">
            <button
              onClick={handleClearFile}
              className="mr-4 w-full items-center rounded-md border border-transparent bg-gray-400 px-0 py-1 text-center text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:bg-gray-300"
            >
              Clear
            </button>
            <button
              onClick={handleAddToCart}
              className="ml-4 w-full items-center justify-center rounded-md border border-transparent bg-accent-400 px-0 py-1 text-center text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2  disabled:bg-gray-300"
            >
              {!isLoading && !isAdded && `Add to cart`}
              {isLoading && <LoadingIcon className="inline h-4 w-4 animate-spin" />}
              {isAdded && <CheckIcon className="inline h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSVUploader;
