import type { ContactInfo } from '@/lib/types';

export const contactInfo: ContactInfo = {
  phone: '+1-307-212-9097',
  email: 'jacobtaxsolutions@gmail.com',
  address: {
    street: '30 N Gould St',
    city: 'Sheridan',
    state: 'WY',
    zip: '82801',
  },
  businessHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  socialMedia: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },
};
