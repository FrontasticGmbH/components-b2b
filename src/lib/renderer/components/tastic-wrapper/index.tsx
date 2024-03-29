import React from 'react';
import { TasticWrapperProps } from './types';
import { highlight } from '../../utils/highlight';
import { deviceVisibility } from '../../utils/device-visibility';
import { injectDataSources } from '../../utils/inject-datasources';

const TasticWrapper = ({ tastics, data, params, searchParams, dataSources, isHighlighted }: TasticWrapperProps) => {
  const Tastic = tastics[data.tasticType];

  if (!Tastic) return <></>;

  const resolvedTasticData = dataSources ? injectDataSources(data.configuration, dataSources) : data.configuration;

  return (
    <div className={`${highlight(isHighlighted)} ${deviceVisibility(data.configuration)}`} id={data.tasticId}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore*/}
      <Tastic id={data?.tasticId} data={resolvedTasticData} params={params} searchParams={searchParams} />
    </div>
  );
};

export default TasticWrapper;
