import React, { useContext, useRef } from 'react';
import Button from '@/components/atoms/button';
import { useTranslations } from 'use-intl';
import { XMarkIcon as CloseIcon } from '@heroicons/react/24/outline';
import Image from '@/components/atoms/Image';
import { QuickOrderDesktopContext } from '../context';

const UploadPanel = () => {
  const inputFile = useRef<HTMLInputElement>(null);
  const translate = useTranslations();
  const {
    files,
    downloadLink,
    loading,
    loadingProgress,
    fileError,
    handleChange,
    handleClearFiles,
    handleClearReadFiles,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleRemoveClick,
    handleUploadClick,
    productsLoading,
  } = useContext(QuickOrderDesktopContext);

  const handleClearClick = () => {
    handleClearFiles();
    handleClearReadFiles();
  };

  const fileNameClassNames = (file: File) => {
    return `rounded-md border ${fileError[file.name] && 'border-red-500'} ${!loading[file.name] && 'border-green-500'}`;
  };

  const loadingBarClassName = (file: File) => `w-[${loadingProgress[file.name]}%] bg-primary h-1`;
  const uploadDisable = files.length === 0 || Object.keys(fileError).length > 0;
  return (
    <div>
      <a href={downloadLink} download="template" target="_blank" rel="noopener noreferrer">
        <Button tabIndex={-1} variant="underlined" size="fit" className="text-14 font-normal">
          {translate('quick-order.download-csv')}
        </Button>
      </a>
      <div
        tabIndex={0}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputFile?.current?.click()}
        onKeyDown={(e) => e.code === 'Enter' && inputFile?.current?.click()}
        className="mt-3 flex h-[160px] w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300"
      >
        <input type="file" multiple onChange={handleChange} ref={inputFile} className="invisible" />
        <Image src={'/sb-assets/upload.svg'} width={50} height={50} alt="Upload" />
        <div className="mt-5">
          <p className="text-center text-14 font-medium text-gray-700">{translate('quick-order.drag-csv')}</p>
          <p className="mt-3 text-center text-12">{translate('quick-order.click-csv')}</p>
        </div>
      </div>
      {files.length > 0 && (
        <div className="mt-4 flex flex-col gap-y-3">
          {files.map((file) => (
            <div className="relative" key={file.lastModified}>
              <div className={fileNameClassNames(file)}>
                <div className="flex justify-between px-2 py-3">
                  <p className="truncate text-14">{file.name}</p>
                  <Button variant="ghost" size="fit" onClick={() => handleRemoveClick(file)}>
                    <CloseIcon className="w-4" />
                  </Button>
                </div>
                {!fileError[file.name] && loadingProgress[file.name] < 100 && (
                  <div className={loadingBarClassName(file)} />
                )}
              </div>
              {fileError[file.name] && <p className="mt-3 text-14 text-red-500">{fileError[file.name]}</p>}
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 flex justify-between gap-x-2">
        <Button
          disabled={files.length === 0}
          variant="secondary"
          size="full"
          className="text-14"
          onClick={handleClearClick}
        >
          {translate('quick-order.click-clear')}
        </Button>
        <Button
          variant="primary"
          size="full"
          disabled={uploadDisable}
          loading={productsLoading}
          onClick={() => handleUploadClick(files)}
          className="text-14"
        >
          {translate('quick-order.click-upload')}
        </Button>
      </div>
    </div>
  );
};
export default UploadPanel;
