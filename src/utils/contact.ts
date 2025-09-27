import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactInfo } from '../types';

export const contactInfo: ContactInfo[] = [
  {
    id: 'email',
    icon: FaEnvelope,
    title: 'Email',
    value: 'softsys95@gmail.com',
    link: 'mailto:softsys95@gmail.com',
  },
  {
    id: 'location',
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Entre Ríos, Argentina',
    link: null,
  },
];
