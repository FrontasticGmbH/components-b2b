import { cache } from 'react';
import { sdk } from '@/sdk';
import getServerOptions from '@/utils/server/getServerOptions';

const fetchProjectSettings = cache(() => {
  return sdk.composableCommerce.project.getSettings({ skipQueue: true, ...getServerOptions() });
});

export default fetchProjectSettings;
