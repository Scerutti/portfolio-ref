import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    icon: FaGithub,
    href: 'https://github.com/scerutti',
    label: 'GitHub',
  },
  {
    id: 'linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/cerutti-sebasti%C3%A1ng/',
    label: 'LinkedIn',
  }
];
