export enum BusinessType {
  BAR = 'bar',
  RESTAURANT = 'restaurant',
  CLUB = 'club',
  HOTEL = 'hotel',
  CAFE = 'cafe',
}

export enum StaffPosition {
  KITCHEN = 'kitchen',
  SERVICE = 'service',
  PR = 'PR',
}

export interface Business {
  id: string;
  name: string;
  location: string;
  type?: BusinessType;
}

export interface Staff {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  business?: Business;
  position?: StaffPosition;
  phoneNumber?: string;
}