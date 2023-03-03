/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from '@heroicons/react/solid';
import { ReactTree } from '@naisutech/react-tree';
import { useBusinessUnitDetailsStateContext } from '../provider';
const BusinessUnitTree = ({ onChange }) => {
  const { businessUnitTree } = useBusinessUnitDetailsStateContext();

  const handleRenderNodes = ({ node, type }) => {
    if (type === 'node') {
      return <div onClick={() => onChange(node)}>{node.name}</div>;
    }
  };

  const handleIconRenderer = ({ node, type, open }): React.ReactNode => {
    if (type === 'node') {
      return open ? (
        <ChevronDoubleDownIcon className="h-4 w-4 text-black" onClick={() => onChange(node)} />
      ) : (
        <ChevronDoubleRightIcon className="h-4 w-4" onClick={() => onChange(node)} />
      );
    }
  };

  if (!businessUnitTree) {
    return null;
  }

  return (
    <div>
      {/* @ts-ignore */}
      <ReactTree nodes={businessUnitTree} RenderIcon={handleIconRenderer} RenderNode={handleRenderNodes} />
    </div>
  );
};

export default BusinessUnitTree;
