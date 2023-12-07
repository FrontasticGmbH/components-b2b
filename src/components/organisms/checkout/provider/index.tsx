import React, { useCallback, useContext, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckoutProviderShape } from './types';
import { CheckoutProps } from '../types';

const CheckoutContext = React.createContext({} as CheckoutProviderShape);

const CheckoutProvider = ({ children }: React.PropsWithChildren<Partial<CheckoutProps>>) => {
  const router = useRouter();

  const [tempData, setTempData] = useState<Record<string, string>>({});

  const searchParams = useSearchParams();

  const activeStep = +(searchParams.get('step') ?? 0);

  const isLastStep = activeStep === 3;

  const [maxStep, setMaxStep] = useState(activeStep);

  const visitedAllSteps = maxStep === 3;

  const nextStep = useCallback(() => {
    router.push(`?step=${activeStep + 1}`);
    setMaxStep(Math.max(maxStep, activeStep + 1));
  }, [activeStep, router, maxStep]);

  const resetStepTo = useCallback(
    (step: number) => {
      router.push(`?step=${step}`);
      setMaxStep(Math.max(maxStep, step));
    },
    [router, maxStep],
  );

  const goToLastStep = useCallback(() => router.push('?step=3'), [router]);

  return (
    <CheckoutContext.Provider
      value={{
        activeStep,
        isLastStep,
        nextStep,
        resetStepTo,
        visitedAllSteps,
        goToLastStep,
        tempData,
        setTempData: (data) => setTempData({ ...tempData, ...data }),
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;

export const useCheckout = () => useContext(CheckoutContext);
