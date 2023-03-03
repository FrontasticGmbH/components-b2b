import { fetchApiHub } from 'frontastic';

export const getAllSubscriptions = async () => {
  return fetchApiHub(`/action/subscription/getAllSubscriptions`, { method: 'GET' });
};
