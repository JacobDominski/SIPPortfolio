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
  paragraphOne: 'I am currently a student at the University of Advancing Technology. At UAT, I am working towards a Computer Science degree with a focus on software development. My time at UAT has helped me increase my knowledge as a programmer and gave me the opportunity to explore other areas of Computer Science. ',
  paragraphTwo: "When I'm not in class, I enjoy creating projects on my own and seeing what I build come to life. One of my favorite projects that I made was a console game in C++ that mimicked a Dungeons and Dragons style game called Dungeon Crawler. ",
  paragraphThree: "When I'm not programming, I enjoy cooking, teaching, and martial arts. Before going to university, I volunteered to teach karate as a first degree black belt which I enjoyed. Additionally, my interest in teaching gave me my first job where I teach programming and computer science to children. ",
  resume: 'https://drive.google.com/file/d/1O8VDu_5SaVJukVIgzHzs4kXrOK56tEen/view?usp=sharing', // if no resume, the button will not show up
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
    url1: '/objectiveone/',
    url2: '/objectivetwo/',
    url3: '/objectivethree/',
  },
  {
    id: nanoid(),
    title1: 'Objective 4',
    title2: 'Objective 5',
    title3: 'Objective 6',
    info1: 'Design and implement solutions for mobile devices or embedded systems.',
    info2: 'Document the planning and development of software applications using industry standard tools, techniques, and processes.',
    info3: 'Within software solutions describe, implement and analyze data structure techniques such as lists, trees, hash tables, graphs, along with sorting and searching algorithms.',
    url1: '/objectivefour/',
    url2: '/objectivefive/',
    url3: '/objectivesix/',
  },
  
];

//OBJECTIVE DATA
export const objectiveOneData = {

  title: 'OBJECTIVE 1',
  description: 'Follow a software development process to analyze a problem, and to design, build, and test software solutions.',
  projects: [
    {
      id: nanoid(),
      img: 'New Proposal.png',
      title: 'HVAC Proposals',
      info: "This is a mobile app using React Native to automate the " +
        "proposal process for my client's company. HVAC Proposals " +
        "gives the technician the ability to create a proposal while " +
        "in front of the customer which will ultimately increase sales " +
        "opportunities. The technician will be able to do everything from " +
        "the app including entering information on which type of system is needed, " +
        "what they plan to do, and any additional add ons the customer is " +
        "interested in. ",
      repo: 'https://github.com/JacobDominski/ReactSIPPrototype',
    },
    {
      idd: nanoid(),
      img: 'PayloadInAir.jpg',
      title: 'Space Project',
      info: "The Space Project was a group project at UAT where a team and I " +
        "developed a payload to collect data in the atmosphere. My job was " +
        "to construct the flight computer. The flight computer consisted of three " + 
        "layers: the sensors, printable circuit board, and the micro controller. " +
        "I also wrote the software that would let the electronics talk to each other " +
        "and send data to the micro SD card. ",
      repo: 'https://github.com/UAT-Space/M5',
    },
    {
      idd: nanoid(),
      img: 'Showcase.png',
      title: 'Report Card Generator',
      info: "This is a console based application written in python that lets you " +
        "create report cards and stores them as JSON files. Within the app, you " +
        "can create new report cards, view already created report cards, and modify " +
        "report cards. ",
      repo: 'https://github.com/JacobDominski/ReportCardPythonWithJSON',
    }
  ]
}

export const objectiveTwoData = {
  title: 'OBJECTIVE 2',
  description: 'Follow a software development process to analyze a problem, and to design, build, and test software solutions.',
  projects: [
    {
      id: nanoid(),
      img: 'Map.png',
      title: 'Dungeon Crawler V2',
      info: "Dungeon Crawler is a console game written in C++ that mimics a Dungeons and " +
        "Dragons style game. The objective of the game is to navigate your way through the " +
        "dungeon by fighting enemies, and collecting items to use until you make your way out." +
        "There's a lot of features in the game like a shop to buy and sell items, an inventory " +
        "system to hold all your items, and a command system that will let the player do a " +
        "variety of actions.",
      repo: 'https://github.com/JacobDominski/DungeonCrawlerV2',
    },
    {
      idd: nanoid(),
      img: 'Showcase.png',
      title: 'Report Card Program',
      info: "This is a console based application written in python that lets you " +
      "create report cards and stores them as JSON files. Within the app, you " +
      "can create new report cards, view already created report cards, and modify " +
      "report cards. ",
      repo: 'https://github.com/JacobDominski/ReportCardPythonWithJSON',
    }
  ]
}

export const objectiveThreeData = {

  title: 'OBJECTIVE 3',
  description: 'Follow a software development process to analyze a problem, and to design, build, and test software solutions.',
  projects: [
    {
      id: nanoid(),
      img: 'TimeZone.png',
      title: 'TimeZone',
      info: "TimeZone is a mobile application that was built with React Native. " +
        "The app was made for a coding competition where I won First Place. The " +
        "app is designed to show you the time of different countries and cities " +
        "accross the globe. ",
      repo: 'https://github.com/JacobDominski/TimeZone',
    },
    {
      idd: nanoid(),
      img: 'New Proposal.png',
      title: 'HVAC Proposals',
      info: "This is a mobile app using React Native to automate the " +
      "proposal process for my client's company. HVAC Proposals " +
      "gives the technician the ability to create a proposal while " +
      "in front of the customer which will ultimately increase sales " +
      "opportunities. The technician will be able to do everything from" +
      "the app including entering information on which type of system is needed, " +
      "what they plan to do, and any additional addons the customer is " +
      "interested in. ",
      repo: 'https://github.com/JacobDominski/ReactSIPPrototype',
    }
  ]
}

export const objectiveFourData = {
  title: 'OBJECTIVE 4',
  description: 'Follow a software development process to analyze a problem, and to design, build, and test software solutions.',
  projects: [
    {
      idd: nanoid(),
      img: 'PayloadInAir.jpg',
      title: 'Space Project',
      info: "The Space Project was a group project at UAT where a team and I " +
        "developed a payload to collect data in the atmosphere. My job was " +
        "to construct the flight computer. The flight computer consisted of three " + 
        "layers: the sensors, printable circuit board, and the micro controller. " +
        "I also wrote the software that would let the electronics talk to each other " +
        "and send data to the micro SD card. ",
      repo: 'https://github.com/UAT-Space/M5',
    },
    {
      id: nanoid(),
      img: 'TimeZone.gif',
      title: 'TimeZone',
      info: "TimeZone is a mobile application that was built with React Native. " +
        "The app was made for a coding competition where I won First Place. The " +
        "app is designed to show you the time of different countries and cities " +
        "accross the globe. ",
      repo: 'https://github.com/JacobDominski/TimeZone',
    }
  ]
}

export const objectiveFiveData = {

  title: 'OBJECTIVE 5',
  description: 'Follow a software development process to analyze a problem, and to design, build, and test software solutions.',
  projects: [
    {
      id: nanoid(),
      img: 'Map.png',
      title: 'Dungeon Crawler V2',
      info: "Dungeon Crawler is a console game written in C++ that mimics a Dungeons and " +
        "Dragons style game. The objective of the game is to navigate your way through the " +
        "dungeon by fighting enemies, and collecting items to use until you make your way out." +
        "There's a lot of features in the game like a shop to buy and sell items, an inventory " +
        "system to hold all your items, and a command system that will let the player do a " +
        "variety of actions.",
      repo: 'https://github.com/JacobDominski/DungeonCrawlerV2',
    },
    {
      idd: nanoid(),
      img: 'Hangman.png',
      title: 'March Memory',
      info: "This application was made by a collaboration of three developers including myself. " +
        "This program was made for a C++ competition with the theme of March. The program has " +
        "three games: Hangman, Word Scramble, and Simon Says. The games use words related to " +
        "the month of March. My contribution to the project was the Hangman game. ",
      repo: 'https://github.com/JacobDominski/MarchMemory',
    }
  ]
}

export const objectiveSixData = {
  title: 'OBJECTIVE 6',
  description: 'Follow a software development process to analyze a problem, and to design, build, and test software solutions.',
  projects: [
    {
      idd: nanoid(),
      img: 'Showcase.png',
      title: 'Report Card Program',
      info: "This is a console based application written in python that lets you " +
      "create report cards and stores them as JSON files. Within the app, you " +
      "can create new report cards, view already created report cards, and modify " +
      "report cards. ",
      repo: 'https://github.com/JacobDominski/ReportCardPythonWithJSON',
    }
    
  ]
}

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
      name: 'codepen',
      url: 'https://codepen.io/Jackintheb0x',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jacob-dominski-825149200',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jacobdominski',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
