import React, { Suspense, useCallback, useMemo } from 'react';
import { Organization } from '@Types/organization/organization';
import { Widget, WidgetLayout } from '@Types/widget/Widget';
import GridLayout from 'react-grid-layout';
import { LoadingIcon } from '../icons/loading';
import { useDashboardStateContext } from './provider';
import { WIDGETS } from './widgets';
import 'react-grid-layout/css/styles.css';
import WidgetList from './widget-list';
import { TrashIcon } from '@heroicons/react/solid';

interface Props {
  organization: Organization;
}

const loadWidget = (widgetId) => {
  const [widget] = WIDGETS.filter((wid) => wid.id === widgetId);

  if (widget) {
    const Component = React.lazy(widget.component);
    return <Component />;
  }
  return null;
};

const Dashboard: React.FC<Props> = () => {
  const { isLoading, widgets, setWidgets } = useDashboardStateContext();

  const onDrop = useCallback(
    (_: WidgetLayout[], item: WidgetLayout, e: DragEvent) => {
      const raw = e.dataTransfer?.getData('droppableWidget');
      if (!raw) {
        return;
      }

      const droppableWidget = JSON.parse(raw) as Widget;

      const newWidgetArr = widgets ? [...widgets] : [];

      droppableWidget.layout.x = item.x;
      droppableWidget.layout.y = item.y;
      droppableWidget.layout.isDraggable = undefined;
      newWidgetArr.push(droppableWidget);

      setWidgets(newWidgetArr);
    },
    [widgets],
  );

  const onLayoutChange = useCallback(
    (newWidgets) => {
      const newWidgetArr = widgets ? [...widgets] : [];
      newWidgetArr.forEach((widget) => {
        const found = newWidgets.find((item) => item.i === widget.id);
        if (!!found) {
          widget.layout = found;
        }
      });
      setWidgets(newWidgetArr);
    },
    [widgets],
  );

  const handleRemoveWidget = (widgetId) => {
    setWidgets(widgets.filter((wid) => wid.id !== widgetId));
  };

  const children = useMemo(() => {
    return widgets?.map((widget) => (
      <div data-grid={widget.layout} key={widget.id}>
        <button
          className="absolute left-1 bottom-1 z-40 text-red-300"
          onClick={() => handleRemoveWidget(widget.id)}
          title="remove"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
        <Suspense fallback={<>Loading</>}>{loadWidget(widget.id)}</Suspense>
      </div>
    ));
  }, [widgets?.length]);

  return (
    <div className={`relative ${!widgets?.length ? 'h-40' : ''}`}>
      {isLoading && <LoadingIcon className="my-0 mx-auto h-8 w-8 animate-spin" />}
      {!isLoading && (
        <>
          <WidgetList />
          <GridLayout
            autoSize
            useCSSTransforms
            isDroppable
            resizeHandles={['se']}
            compactType={null}
            width={1100}
            onDrop={onDrop}
            onDragStop={onLayoutChange}
            onResizeStop={onLayoutChange}
            style={!widgets?.length ? { height: '160px' } : {}}
          >
            {children}
          </GridLayout>
        </>
      )}
    </div>
  );
};

export default Dashboard;
