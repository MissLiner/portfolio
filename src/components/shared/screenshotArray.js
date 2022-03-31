import FSRestImg from '../images/screenshots/screengallery/FS_restaurant.svg';
import TNRestImg from '../images/screenshots/screengallery/TN_restaurant.svg';
import FSBattleImg from '../images/screenshots/screengallery/FS_battleship.svg';
import TNBattleImg from '../images/screenshots/screengallery/TN_battleship.svg';
import FSCalcImg from '../images/screenshots/screengallery/FS_calculator.svg';
import TNCalcImg from '../images/screenshots/screengallery/TN_calculator.svg';
import FSMemoryWelcomeImg from '../images/screenshots/screengallery/FS_memory-welcome.svg';
import TNMemoryWelcomeImg from '../images/screenshots/screengallery/TN_memory-welcome.svg';
import FSMemoryGameImg from '../images/screenshots/screengallery/FS_memory.svg';
import TNMemoryGameImg from '../images/screenshots/screengallery/TN_memory.svg';
import FSCando1Img from '../images/screenshots/screengallery/FS_candolist.svg';
import TNCando1Img from '../images/screenshots/screengallery/TN_candolist.svg';
import FSCando2Img from '../images/screenshots/screengallery/FS_candolist-add.svg';
import TNCando2Img from '../images/screenshots/screengallery/TN_candolist-add.svg';
import FSTictacImg from '../images/screenshots/screengallery/FS_tictactoe.svg';
import TNTictacImg from '../images/screenshots/screengallery/TN_tictactoe.svg';
import FSLibraryImg from '../images/screenshots/screengallery/FS_library.svg';
import TNLibraryImg from '../images/screenshots/screengallery/TN_library.svg';


export const screenshotArray = [
  [ FSRestImg, "restaurant site screenshot", TNRestImg, "Restaurant Homepage" ],
  [ FSBattleImg, "battleship site screenshot", TNBattleImg, "Battleship Game" ],
  [ FSCalcImg, "calculator site screenshot", TNCalcImg, "Calculator"],
  [ FSMemoryWelcomeImg, "memorycard welcome screen site screenshot", TNMemoryWelcomeImg, "Memory Card"],
  [ FSMemoryGameImg, "memorycard game screen site screenshot", TNMemoryGameImg, "Memory Card"],
  [ FSCando1Img, "can do list site screenshot", TNCando1Img, "Can-Do List"],
  [ FSCando2Img, "can do list add task site screenshot", TNCando2Img, "Can-Do List"],
  [ FSTictacImg, "tic-tac-toe site screenshot", TNTictacImg, "Tic-Tac-Toe"],
  [ FSLibraryImg, "libary site screenshot", TNLibraryImg, "Library App"],
]


export const projectArray = [
  {
    name: "Restaurant Homepage",
    image: [FSRestImg, "restaurant homepage screenshot"],
    thumbnail: [TNRestImg, "restaurant homepage thumbnail"],
    addlImages: [],
    addlThumbnails: [],
    focus: ["Dom manipulation", "Dynamic rendering", "Webpack", "Illustrator"],
    summary: "A colorful site, inspired by my daughter's love of wild animals! This project emplyed classes, modules and Webpack for the first time to dynamically render the DOM. I created all images and icons using Adobe Illustrator.",
    code: 'https://github.com/MissLiner/restaurant-page.git',
    live: 'https://missliner.github.io/restaurant-page/',
    active: false,
  },
  {
    name: "Battleship Game",
    image: [FSBattleImg, "battleship game screenshot"],
    thumbnail: [TNBattleImg, "battleship game thumbnail"],
    addlImages: [],
    addlThumbnails: [],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/battleship_game.git',
    live: 'https://missliner.github.io/battleship_game/',
    active: true,
  },
  {
    name: "Calculator",
    image: [FSCalcImg, "calculator screenshot"],
    thumbnail: [TNCalcImg, "calculator screenshot"],
    addlImages: [],
    addlThumbnails: [],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/Calculator.git',
    live: 'https://missliner.github.io/Calculator/',
    active: false,
  },
  {
    name: "Memory Card",
    image: [FSMemoryGameImg, "memory card game screenshot"],
    thumbnail: [TNMemoryGameImg, "memory card game thumbnail"],
    addlImages: [FSMemoryWelcomeImg, "memory card game welcome screenshot"],
    addlThumbnails: [TNMemoryWelcomeImg, "memory card game welcome thumbnail"],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/memory-card.git',
    live: 'https://missliner.github.io/memory-card/',
    active: true,
  },
  {
    name: "Tic-Tac-Toe",
    image: [FSTictacImg, "tic-tac-toe site screenshot"],
    thumbnail: [TNTictacImg, "tic-tac-toe site screenshot"],
    addlImages: [],
    addlThumbnails: [],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/tic-tac-toe.git',
    live: 'https://missliner.github.io/tic-tac-toe/',
    active: false,
  },
  {
    name: "Can-Do List",
    image: [FSCando1Img, "can-do list screenshot"],
    thumbnail: [TNCando1Img, "can-do list thumbnail"],
    addlImages: [FSCando2Img, "can-do list add task screenshot"],
    addlThumbnails: [TNMemoryWelcomeImg, "can-do list add task thumbnail"],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/to-do-list.git',
    live: 'https://missliner.github.io/to-do-list/',
    active: false,
  },
  {
    name: "Library App",
    image: [FSLibraryImg, "library app screenshot"],
    thumbnail: [TNRestImg, "library app thumbnail"],
    addlImages: [],
    addlThumbnails: [],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/library-app.git',
    live: 'https://missliner.github.io/library-app/',
    active: false,
  },
  // {
  //   name: "ResuMaker",
  //   image: [],
  //   thumbnail: [],
  //   addlImages: [],
  //   addlThumbnails: [],
  //   focus: ["ReactJS", "Basic Components"],
  //   summary: "",
  //   code: 'https://github.com/MissLiner/cv-project.git',
  //   live: 'https://missliner.github.io/cv-project/',
  //   active: false,
  // },
]
// const projectTemplate = 
//   {
//     name: "",
//     image: [],
//     thumbnail: [],
//     addlImages: [],
//     addlThumbnails: [],
//     focus: [],
//     summary: "",
//     code: 'https://github.com/MissLiner/-.git',
//     live: 'https://missliner.github.io/-/',
//     active: false,
//   };