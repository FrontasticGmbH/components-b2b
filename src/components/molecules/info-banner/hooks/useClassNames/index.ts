import { cva } from '@/utils/classnames/cva';
import { classnames } from '@/utils/classnames/classnames';
import { InfoBannerProps } from '../../types';

const useClassNames = ({ variant }: Partial<InfoBannerProps>) => {
  const resolveBannerVariant = cva({
    intent: {
      primary: 'bg-[#ECF0FB]',
      warning: 'bg-yellow-100',
    },
  });

  const resolveSidebarVariant = cva({
    intent: {
      primary: 'bg-[#416BD8]',
      warning: 'bg-yellow-500',
    },
  });

  const bannerClassName = classnames(
    'flex items-stretch gap-3 overflow-hidden rounded-md md:gap-4 lg:gap-5',
    resolveBannerVariant(`intent.${variant}`) as string,
  );

  const sidebarClassName = classnames('block w-[8px] shrink-0', resolveSidebarVariant(`intent.${variant}`) as string);

  return { bannerClassName, sidebarClassName };
};

export default useClassNames;
