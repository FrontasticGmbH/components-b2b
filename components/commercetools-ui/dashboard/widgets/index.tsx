export const WIDGETS = [
  {
    name: 'Delivery Schedule',
    component: () => import(`./DeliverySchedule`),
    id: 'DeliverySchedule',
    layout: { i: 'DeliverySchedule', x: 0, y: 0, w: 3, h: 1 },
  },
  {
    name: 'Delivery Status',
    component: () => import(`./DeliveryStatus`),
    id: 'DeliveryStatus',
    layout: { i: 'DeliveryStatus', x: 0, y: 0, w: 3, h: 1 },
  },
  {
    name: 'Recent Purchase',
    component: () => import(`./RecentPurchase`),
    id: 'RecentPurchase',
    layout: { i: 'RecentPurchase', x: 0, y: 0, w: 6, h: 2 },
  },
  {
    name: 'Average Order',
    component: () => import(`./AverageOrder`),
    id: 'AverageOrder',
    layout: { i: 'AverageOrder', x: 0, y: 0, w: 3, h: 1 },
  },
  {
    name: 'Order Status',
    component: () => import(`./OrderStatus`),
    id: 'OrderStatus',
    layout: { i: 'OrderStatus', x: 0, y: 0, w: 5, h: 2 },
  },
  {
    name: 'Purchase Lists',
    component: () => import(`./Wishlists`),
    id: 'Wishlists',
    layout: { i: 'Wishlists', x: 0, y: 0, w: 5, h: 2 },
  },
  {
    name: 'Budget',
    component: () => import(`./Budget`),
    id: 'Budget',
    layout: { i: 'Budget', x: 0, y: 0, w: 5, h: 1 },
  },
  {
    name: 'Order List',
    component: () => import(`./OrderList`),
    id: 'OrderList',
    layout: { i: 'OrderList', x: 0, y: 0, w: 12, h: 3 },
  },
  {
    name: 'Orders waiting for review',
    component: () => import(`./OrdersUnderReview`),
    id: 'OrdersUnderReview',
    layout: { i: 'OrdersUnderReview', x: 0, y: 0, w: 12, h: 2 },
  },
  {
    name: 'Company Purchases',
    component: () => import(`./CompanyPurchased`),
    id: 'CompanyPurchased',
    layout: { i: 'CompanyPurchased', x: 0, y: 0, w: 6, h: 3 },
  },
];
