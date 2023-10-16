import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import { useAccount } from 'frontastic';
import { LoadingIcon } from '../icons/loading';

const RouteGuard: React.FC<{ children }> = ({ children }): ReactElement => {
  const { loggedIn } = useAccount();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const debounced = useRef(
    debounce(async (isLoggedIn) => {
      const path = router.asPath.split('?')[0];

      const publicPaths = ['/login', '/register', /\/__preview\/.*/g];

      if (!isLoggedIn && !publicPaths.some((p) => path.match(p))) {
        await router.push({
          pathname: '/login',
          query: { returnUrl: router.asPath },
        });
      }
      setIsLoading(false);
    }, 1000),
  );

  useEffect(() => debounced.current(loggedIn), [loggedIn]);

  return (
    <>
      {isLoading && (
        <div>
          <LoadingIcon className="mx-auto mt-8 h-4 w-4 animate-spin" />
        </div>
      )}
      {!isLoading && children}
    </>
  );
};

export default RouteGuard;
