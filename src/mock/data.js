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
  nextLink: '/objectivetwo',
  prevLink: '',
  projects: [
    {
      id: nanoid(),
      img: 'UATSpaceProductBacklog.PNG',
      title: 'Space Project',
      info: "The Space Project was a group project at UAT where a team and I " +
        "developed a payload to collect data in the atmosphere. My job was " +
        "to construct the flight computer. The flight computer consisted of three " + 
        "layers: the sensors, printable circuit board, and the micro controller. " +
        "I also wrote the software that would let the electronics talk to each other " +
        "and send data to the micro SD card. This project meets the objective because " +
        "we used an Agile development process with multiple sprints to successfully " +
        "complete the project and have a successful launch.",
      repo: 'https://github.com/UAT-Space/M5',
      source: '',
    },
    {
      id: nanoid(),
      img: 'GameSafeProductBacklog.PNG',
      title: 'GameSafe',
      info: "GameSafe is a third party application that is currently in development. " +
        "The purpose of the app is to monitor online game chats and look for predatoy " +
        "activity. My main contribution has been mostly web development and making the " +
        "user registration site. This project meets the objective because it demonstrates " +
        "the use of an Agile development process with sprints and backlogs as a way to get " +
        "people to work together efficiently. ",
      repo: 'https://github.com/JacobDominski/GameSafe',
      source: '',
    }
  ]
}

export const objectiveTwoData = {
  title: 'OBJECTIVE 2',
  description: 'Demonstrate software development skills using more than one programming language and development environment.',
  nextLink: '/objectivethree',
  prevLink: '/objectiveone',
  projects: [
    {
      id: nanoid(),
      img: 'VSCode.PNG',
      title: 'Dungeon Crawler V2',
      info: "Dungeon Crawler is a console game written in C++ that mimics a Dungeons and " +
        "Dragons style game. The objective of the game is to navigate your way through the " +
        "dungeon by fighting enemies, and collecting items to use until you make your way out." +
        "There's a lot of features in the game like a shop to buy and sell items, an inventory " +
        "system to hold all your items, and a command system that will let the player do a " +
        "variety of actions. This meets the objectives because the game was developed in " +
        "Visual Studio Code / Visual Studio community edition along with the C++ language.",
      repo: 'https://github.com/JacobDominski/DungeonCrawlerV2',
      source: '',
    },
    {
      id: nanoid(),
      img: 'Pycharm.PNG',
      title: 'Report Card Program',
      info: "This is a console based application written in python that lets you " +
      "create report cards and stores them as JSON files. Within the app, you " +
      "can create new report cards, view already created report cards, and modify " +
      "existing report cards. Overall, this project meets the objective because I used " + 
      "pycharm as the integrated development environment.",
      repo: 'https://github.com/JacobDominski/ReportCardPythonWithJSON',
      source: '',
    }
  ]
}

export const objectiveThreeData = {

  title: 'OBJECTIVE 3',
  description: 'Design and implement software solutions across multiple platforms.',
  nextLink: '/objectivefour',
  prevLink: '/objectivetwo',
  projects: [
    {
      id: nanoid(),
      img: 'TimeZone.png',
      title: 'TimeZone',
      info: "TimeZone is a mobile application that was built with React Native. " +
        "The app was made for a coding competition where I won First Place. The " +
        "app is designed to show you the time of different countries and cities " +
        "accross the globe. This project meets the objective because it can be " +
        "deployed to both iOS and Android.",
      repo: 'https://github.com/JacobDominski/TimeZone',
      source: 'https://youtu.be/hDek8Dw5uZE',
    },
    {
      id: nanoid(),
      img: 'New Proposal.png',
      title: 'HVAC Proposals',
      info: "This is a mobile app using React Native to automate the " +
      "proposal process for my client's company. HVAC Proposals " +
      "gives the technician the ability to create a proposal while " +
      "in front of the customer which will ultimately increase sales " +
      "opportunities. The technician will be able to do everything from" +
      "the app including entering information on which type of system is needed, " +
      "what they plan to do, and any additional addons the customer is " +
      "interested in. This project meets the objective because it can be deployed" +
      "to both iOS and Android.",
      repo: 'https://github.com/JacobDominski/ReactSIPPrototype',
      source: 'https://youtu.be/6zgTf16rL8Q',
    }
  ]
}

export const objectiveFourData = {
  title: 'OBJECTIVE 4',
  description: 'Design and implement software solutions for mobile devices or embedded systems.',
  nextLink: '/objectivefive',
  prevLink: '/objectivethree',
  projects: [
    {
      id: nanoid(),
      img: 'PCB.png',
      title: 'Space Project',
      info: "The Space Project was a group project at UAT where a team and I " +
        "developed a payload to collect data in the atmosphere. My job was " +
        "to construct the flight computer. The flight computer consisted of three " + 
        "layers: the sensors, printable circuit board, and the micro controller. " +
        "I also wrote the software that would let the electronics talk to each other " +
        "and send data to the micro SD card. This project meets the objective because " +
        "it involves programming an embedded system.",
      repo: 'https://github.com/UAT-Space/M5',
      source: '',
    },
    {
      id: nanoid(),
      img: 'TimeZone.png',
      title: 'TimeZone',
      info: "TimeZone is a mobile application that was built with React Native. " +
        "The app was made for a coding competition where I won First Place. The " +
        "app is designed to show you the time of different countries and cities " +
        "accross the globe. This project meets the objective because it can be " +
        "implemented on mobile devices for iOS and Android.",
      repo: 'https://github.com/JacobDominski/TimeZone',
      source: 'https://youtu.be/hDek8Dw5uZE',
    }
  ]
}

export const objectiveFiveData = {

  title: 'OBJECTIVE 5',
  description: 'Document the planning and development of software applications using industry standard tools, techniques, and processes.',
  nextLink: '/objectivesix',
  prevLink: '/objectivefour',
  projects: [
    {
      id: nanoid(),
      img: 'GameSageFlowChartEdit.png',
      title: 'GameSafe',
      info: "GameSafe is a third party application that is currently in development. " +
        "The purpose of the app is to monitor online game chats and look for predatoy " +
        "activity. My main contribution has been mostly web development and making the " +
        "user registration site. This project meets the objective because it demonstrates " +
        "the use of an Agile development process with sprints and backlogs as a way to get " +
        "people to work together efficiently. ",
      repo: 'https://github.com/JacobDominski/GameSafe',
      source: '',
    },
    {
      id: nanoid(),
      img: 'HVACUML.png',
      title: 'HVAC Proposals',
      info: "This is a mobile app using React Native to automate the " +
      "proposal process for my client's company. HVAC Proposals " +
      "gives the technician the ability to create a proposal while " +
      "in front of the customer which will ultimately increase sales " +
      "opportunities. The technician will be able to do everything from" +
      "the app including entering information on which type of system is needed, " +
      "what they plan to do, and any additional addons the customer is " +
      "interested in. This project meets the objective because it can be deployed" +
      "to both iOS and Android.",
      repo: 'https://github.com/JacobDominski/ReactSIPPrototype',
      source: 'https://youtu.be/6zgTf16rL8Q',
    },
    
  ]
}

export const objectiveSixData = {
  title: 'OBJECTIVE 6',
  description: 'Within software solutions describe, implement and analyze data structure techniques such as lists, trees, hash tables, graphs, along with sorting and searching algorithms.',
  nextLink: '',
  prevLink: '/objectivefive',
  projects: [
    {
      id: nanoid(),
      img: 'DataStructure.PNG',
      title: 'Data Structures',
      info: "This is a small module I made that includes Linked Lists, Stacks, and" +
      "queues. The program shows the use of each data structure along with a linked " +
      "list module that I also made from scratch. I believe I met the objective with " +
      "this project because I demonstrated the use and creation of the data structures " +
      "from the ground up. ",
      repo: 'https://github.com/JacobDominski/DataStructures',
      source: '',
    },
    {
      id: nanoid(),
      img: 'Algorithms.PNG',
      title: 'Search and Sort algorithms',
      info: "This is a small program I made that demonstrates the use and creation " +
      "of search and sorting algorithms. I also included my Linked List module to be " +
      "used for the search and sorting algorithms. For the search algorithms, I used " +
      "linear and binary search algorithms along with an iterative and recursive method " +
      "for each. The sorting algorithms display a use of bubble sort, insertion sort, and " +
      "selection sort. Overall, I believe this project meets the requirements for this " +
      "objective because it directly related to the description of the objective. ",
      repo: 'https://github.com/JacobDominski/SearchAndSortAlgorithms',
      source: '',
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
