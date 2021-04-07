import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jacob Dominski', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'check', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jacob Dominski',
  subtitle: "Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title1: 'Objective 1',
    title2: 'Objective 2',
    title3: 'Objective 3',
    info1: 'Follow a software development process to analyze a problem, and to design, build, and test software solutions.',
    info2: 'Demonstrate software development skills using more than one programming language and development environment.',
    info3: 'Design and implement software solutions across multiple platforms.',
    url1: './objectiveone',
    url2: '',
    url3: '',
  },
  {
    id: nanoid(),
    title1: 'Objective 4',
    title2: 'Objective 5',
    title3: 'Objective 6',
    info1: 'Design and implement solutions for mobile devices or embedded systems.',
    info2: 'Document the planning and development of software applications using industry standard tools, techniques, and processes.',
    info3: 'Within software solutions describe, implement and analyze data structure techniques such as lists, trees, hash tables, graphs, along with sorting and searching algorithms.',
    url1: '',
    url2: '',
    url3: '',
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jacob_dominski@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'github.com/jacobdominski',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
