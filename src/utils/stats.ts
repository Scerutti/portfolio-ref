import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import { Stat } from '../types';

export const stats: Stat[] = [
  { id: 'experience', icon: FaCode, value: '3.5', label: 'about.experience' },
  { id: 'projects', icon: FaRocket, value: '15+', label: 'about.projects' },
  { id: 'team', icon: FaUsers, value: '5+', label: 'about.team' },
  { id: 'certs', icon: FaLightbulb, value: '9+', label: 'about.certs' },
];
