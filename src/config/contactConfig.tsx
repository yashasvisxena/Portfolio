import { File, Github, Linkedin, Mail, Phone } from 'lucide-react';

export const ContactConfig = {
  resume: {
    icon: <File size={16} />,
    link: 'https://drive.google.com/file/d/11v4KoTRlHwvYYF7eQEDYT7yRlDy4rTwJ/view',
    type: 'open',
  },
  email: {
    icon: <Mail size={16} />,
    link: 'yashasvisaxena.work@gmail.com',
    type: 'copy',
  },
  phone: {
    icon: <Phone size={16} />,
    link: '+918564085950',
    type: 'copy',
  },
  github: {
    icon: <Github size={16} />,
    link: 'https://github.com/yashasvisxena',
    type: 'open',
  },
  linkedin: {
    icon: <Linkedin size={16} />,
    link: 'https://www.linkedin.com/in/yashasvisxena/',
    type: 'open',
  },
};
