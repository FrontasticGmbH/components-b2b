import { Address } from '@Types/account/Address';

export const mapAddressToString = (address: Address): string => {
  const addressPieces = [
    `${address.streetNumber || ''} ${address.streetName || ''}`,
    `(${address.firstName || ''} ${address.lastName || ''})`,
    address.city || '',
    address.state || '',
    address.country || '',
  ];
  return addressPieces.filter((piece) => piece).join(', ');
};
