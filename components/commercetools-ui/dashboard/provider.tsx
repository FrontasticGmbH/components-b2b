import { Context, createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { DashboardCustomObject } from '@Types/dashboard/Dashboard';
import { Widget } from '@Types/widget/Widget';
import debounce from 'lodash.debounce';
import { fetchApiHub, useAccount } from 'frontastic';
// eslint-disable-next-line @typescript-eslint/ban-types
const DashboardStateContext: Context<{
  widgets: Widget[];
  isLoading: boolean;
  setWidgets: (widgets: Widget[]) => void;
}> = createContext({
  isLoading: false,
  widgets: [],
  setWidgets: () => null,
});

export const DashboardProvider = ({ children }) => {
  const { account } = useAccount();
  const [widgets, setWidgets] = useState<Widget[]>();
  const [isLoading, setIsLoading] = useState(false);

  const getMyDashboard = async (): Promise<DashboardCustomObject> => {
    return await fetchApiHub(`/action/dashboard/getMyDashboard`, { method: 'GET' });
  };

  const updateDashboard = async (widgets: Widget[]): Promise<DashboardCustomObject> => {
    return await fetchApiHub(`/action/dashboard/updateDashboard`, { method: 'POST' }, { widgets });
  };

  useEffect(() => {
    (async () => {
      if (account) {
        setIsLoading(true);
        const dashboard = await getMyDashboard();
        if (dashboard.value?.widgets) {
          setWidgets(dashboard.value?.widgets);
        }
        setIsLoading(false);
      }
    })();
  }, [account]);

  const debounced = useCallback(
    debounce(async (widgets) => {
      updateDashboard(widgets);
    }, 4000),
    [],
  );

  useEffect(() => debounced(widgets), [widgets]);

  return (
    <DashboardStateContext.Provider
      value={{
        widgets,
        isLoading,
        setWidgets,
      }}
    >
      {children}
    </DashboardStateContext.Provider>
  );
};

export const useDashboardStateContext = () => useContext(DashboardStateContext);
