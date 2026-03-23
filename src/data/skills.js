import {
  FaBlender,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLinux,
  FaPhp,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiC, SiCplusplus, SiExpress, SiFlutter, SiMysql, SiNodedotjs, SiTailwindcss, SiVmware } from 'react-icons/si';

export const techStackCards = [
  {
    title: 'Frontend',
    value: 'React / Tailwind CSS',
    icon: FaReact,
    items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Language',
    value: 'JavaScript / Java',
    icon: FaJava,
    items: ['JavaScript', 'Java', 'Python', 'PHP', 'C / C++'],
  },
  {
    title: 'Backend',
    value: 'Node.js / Express',
    icon: SiExpress,
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    value: 'MongoDB / MySQL',
    icon: FaDatabase,
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'APIs',
    value: 'REST APIs / JWT',
    icon: SiVmware,
    items: ['REST APIs', 'JWT'],
  },
  {
    title: 'Tools',
    value: 'Git / Linux / Flutter',
    icon: FaGitAlt,
    items: ['Git', 'GitHub', 'Linux', 'Flutter', 'Blender', 'Cisco Packet Tracer'],
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'C / C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'HTML / CSS', icon: FaHtml5 },
      { name: 'PHP', icon: FaPhp },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'GitHub', icon: FaGitAlt },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Ubuntu', icon: FaLinux },
      { name: 'Cisco Packet Tracer', icon: FaGitAlt },
      { name: 'Blender', icon: FaBlender },
    ],
  },
];

export const progressSkills = [
  { name: 'HTML / CSS', value: 92 },
  { name: 'JavaScript', value: 86 },
  { name: 'React', value: 84 },
  { name: 'Backend Development', value: 79 },
  { name: 'UI / UX', value: 83 },
  { name: 'Problem Solving', value: 88 },
  { name: 'DSA', value: 37 },
];
