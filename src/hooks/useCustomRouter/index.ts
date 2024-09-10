'use client';

import { useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { constructLocalizedUrl } from '@/utils/links';

const useCustomRouter = () => {
  const { push: pushRoute, replace: replaceRoute, ...router } = useRouter();

  const { locale } = useParams();

  const push = useCallback(
    (href: string, { locale: localeOverride, ...options }: Parameters<typeof pushRoute>[1] & { locale?: string } = {}) => {
      pushRoute(constructLocalizedUrl(href, localeOverride ?? (locale as string)), options);
    },
    [pushRoute, locale],
  );

  const replace = useCallback(
    (href: string, { locale: localeOverride, ...options }: Parameters<typeof replaceRoute>[1] & { locale?: string } = {}) => {
      replaceRoute(constructLocalizedUrl(href, localeOverride ?? (locale as string)), options);
    },
    [replaceRoute, locale],
  );

  return { ...router, push, replace };
};

export default useCustomRouter;
